import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './db.js';
import { registrationSchema } from './validators.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const clientBuildPath = path.join(projectRoot, 'dist');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/registrations', (req, res) => {
  const parseResult = registrationSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: parseResult.error.flatten(),
    });
  }

  const data = parseResult.data;

  const params = {
    team_leader_name: data.teamLeaderName,
    team_leader_id: data.teamLeaderID,
    player1_id: data.player1ID,
    player2_id: data.player2ID,
    player3_id: data.player3ID,
    player4_id: data.player4ID,
    mail_id: data.mailID,
    college_name: data.collegeName,
    whatsapp_number: data.whatsappNumber,
    state: data.state,
  };

  try {
    const stmt = db.prepare(`
      INSERT INTO registrations (
        team_leader_name, team_leader_id,
        player1_id, player2_id, player3_id, player4_id,
        mail_id, college_name, whatsapp_number, state
      ) VALUES (
        @team_leader_name, @team_leader_id,
        @player1_id, @player2_id, @player3_id, @player4_id,
        @mail_id, @college_name, @whatsapp_number, @state
      )
    `);
    const result = stmt.run(params);
    return res.status(201).json({ id: result.lastInsertRowid });
  } catch (err) {
    const message = String(err?.message || '');
    if (message.includes('UNIQUE') || message.includes('constraint failed')) {
      return res.status(409).json({ error: 'Duplicate registration detected for email or team leader ID.' });
    }
    console.error('DB insert error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve RuleBook.pdf for download
app.get('/api/rulebook', (_req, res) => {
  const filePath = path.join(projectRoot, 'RuleBook.pdf');
  res.download(filePath, 'RuleBook.pdf', (err) => {
    if (err) {
      console.error('Error sending RuleBook.pdf:', err);
      res.status(500).json({ error: 'Unable to download RuleBook.pdf' });
    }
  });
});

// Serve built frontend (after `npm run build`)
app.use(express.static(clientBuildPath));

// SPA fallback for client-side routing (keep after API routes)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`API server listening on http://${HOST}:${PORT}`);
});