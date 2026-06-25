import Project from '../models/Project.js';
import Experience from '../models/Experience.js';
import { isDbConnected } from '../config/db.js';
import * as seed from '../seed/data.js';

// Serve from MongoDB when connected; otherwise fall back to seed data so the
// API (and the frontend) work even without a database.

export async function getProfile(req, res) {
  res.json(seed.profile);
}

export async function getSkills(req, res) {
  res.json(seed.skills);
}

export async function getEducation(req, res) {
  res.json(seed.education);
}

export async function getProjects(req, res, next) {
  try {
    if (isDbConnected()) {
      const docs = await Project.find().sort({ order: 1 }).lean();
      if (docs.length) return res.json(docs);
    }
    res.json(seed.projects);
  } catch (err) {
    next(err);
  }
}

export async function getExperience(req, res, next) {
  try {
    if (isDbConnected()) {
      const docs = await Experience.find().sort({ order: 1 }).lean();
      if (docs.length) return res.json(docs);
    }
    res.json(seed.experience);
  } catch (err) {
    next(err);
  }
}
