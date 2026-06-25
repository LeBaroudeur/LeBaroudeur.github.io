import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import {
  getProfile,
  getSkills,
  getEducation,
  getProjects,
  getExperience,
} from '../controllers/portfolioController.js';
import { createMessage } from '../controllers/contactController.js';

const router = Router();

router.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

router.get('/profile', getProfile);
router.get('/skills', getSkills);
router.get('/education', getEducation);
router.get('/projects', getProjects);
router.get('/experience', getExperience);

// Throttle the public contact endpoint to deter abuse.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages from this IP, please try again later.' },
});

router.post('/contact', contactLimiter, createMessage);

export default router;
