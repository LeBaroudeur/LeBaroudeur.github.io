import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import apiRouter from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json({ limit: '64kb' }));

app.get('/', (req, res) => res.json({ name: 'mern-portfolio-api', docs: '/api/health' }));
app.use('/api', apiRouter);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Central error handler
app.use((err, req, res, next) => {
  console.error('[error]', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

async function start() {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => console.log(`[api] listening on http://localhost:${PORT}`));
}

start();
