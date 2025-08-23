-- SQLite schema for Campus Clash registrations
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;

-- To create the DB file, run:
--   sqlite3 database/campus_clash.sqlite < database/sqlite_schema.sql

-- Table: registrations
CREATE TABLE IF NOT EXISTS registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  team_leader_name TEXT NOT NULL,
  team_leader_id TEXT NOT NULL,
  player1_id TEXT NOT NULL,
  player2_id TEXT NOT NULL,
  player3_id TEXT NOT NULL,
  player4_id TEXT NOT NULL,
  player1_contact_number TEXT,
  player2_contact_number TEXT,
  player3_contact_number TEXT,
  mail_id TEXT NOT NULL,
  college_name TEXT NOT NULL,
  whatsapp_number TEXT NOT NULL,
  state TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

-- Uniqueness constraints
CREATE UNIQUE INDEX IF NOT EXISTS uq_registrations_mail_id ON registrations (mail_id);
CREATE UNIQUE INDEX IF NOT EXISTS uq_registrations_team_leader_id ON registrations (team_leader_id);

-- Helpful lookup indexes
CREATE INDEX IF NOT EXISTS idx_registrations_state ON registrations (state);
CREATE INDEX IF NOT EXISTS idx_registrations_college_name ON registrations (college_name);

-- Keep updated_at current on row updates
CREATE TRIGGER IF NOT EXISTS trg_registrations_set_updated_at
AFTER UPDATE ON registrations
FOR EACH ROW
BEGIN
	UPDATE registrations
	SET updated_at = (strftime('%Y-%m-%d %H:%M:%f', 'now'))
	WHERE id = NEW.id;
END;

-- View for exports
CREATE VIEW IF NOT EXISTS registrations_export AS
SELECT
	id,
	team_leader_name,
	team_leader_id,
	player1_id,
	player2_id,
	player3_id,
	player4_id,
	mail_id,
	college_name,
	whatsapp_number,
	state,
	created_at,
	updated_at
FROM registrations;

-- Example insert (remove after testing)
-- INSERT INTO registrations (
--   team_leader_name, team_leader_id,
--   player1_id, player2_id, player3_id, player4_id,
--   mail_id, college_name, whatsapp_number, state
-- ) VALUES (
--   'Jane Doe', 'TL12345',
--   'P1_67890', 'P2_67891', 'P3_67892', 'P4_67893',
--   'jane.doe@example.com', 'IIT Kharagpur', '+919999999999', 'West Bengal'
-- ); 