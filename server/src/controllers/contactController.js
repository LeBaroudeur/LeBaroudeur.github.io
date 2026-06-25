import Message from '../models/Message.js';
import { isDbConnected } from '../config/db.js';

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function createMessage(req, res, next) {
  try {
    const name = (req.body.name || '').trim();
    const email = (req.body.email || '').trim();
    const message = (req.body.message || '').trim();

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required.' });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }
    if (message.length > 4000) {
      return res.status(400).json({ error: 'Message is too long (4000 chars max).' });
    }

    if (!isDbConnected()) {
      // Accept gracefully even without a DB so the UX still works in demo mode.
      return res.status(202).json({ ok: true, stored: false, note: 'Received (no DB connected — not persisted).' });
    }

    const doc = await Message.create({ name, email, message });
    res.status(201).json({ ok: true, stored: true, id: doc._id });
  } catch (err) {
    next(err);
  }
}
