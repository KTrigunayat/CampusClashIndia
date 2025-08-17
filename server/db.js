import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const databaseDir = path.join(projectRoot, 'database');
const dbPath = process.env.DB_PATH || path.join(databaseDir, 'campus_clash.sqlite');
const schemaPath = path.join(databaseDir, 'sqlite_schema.sql');

if (!fs.existsSync(databaseDir)) {
  fs.mkdirSync(databaseDir, { recursive: true });
}

const isNewDb = !fs.existsSync(dbPath);

const db = new Database(dbPath);

// Pragmas for durability/performance tradeoff suitable for web app scale
try {
  db.pragma('journal_mode = WAL');
  db.pragma('synchronous = NORMAL');
  db.pragma('foreign_keys = ON');
} catch {}

if (isNewDb) {
  if (fs.existsSync(schemaPath)) {
    const schema = fs.readFileSync(schemaPath, 'utf-8');
    db.exec(schema);
  } else {
    // Minimal fallback schema if the file is missing
    db.exec(`
      CREATE TABLE IF NOT EXISTS registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        team_leader_name TEXT NOT NULL,
        team_leader_id TEXT NOT NULL,
        player1_id TEXT NOT NULL,
        player2_id TEXT NOT NULL,
        player3_id TEXT NOT NULL,
        player4_id TEXT NOT NULL,
        mail_id TEXT NOT NULL,
        college_name TEXT NOT NULL,
        whatsapp_number TEXT NOT NULL,
        state TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M:%f', 'now')),
        updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%d %H:%M:%f', 'now'))
      );
      CREATE UNIQUE INDEX IF NOT EXISTS uq_registrations_mail_id ON registrations (mail_id);
      CREATE UNIQUE INDEX IF NOT EXISTS uq_registrations_team_leader_id ON registrations (team_leader_id);
      CREATE INDEX IF NOT EXISTS idx_registrations_state ON registrations (state);
      CREATE INDEX IF NOT EXISTS idx_registrations_college_name ON registrations (college_name);
    `);
  }
}

export default db; 