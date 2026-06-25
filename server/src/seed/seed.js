import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import Project from '../models/Project.js';
import Experience from '../models/Experience.js';
import { projects, experience } from './data.js';

async function run() {
  const conn = await connectDB(process.env.MONGO_URI);
  if (!conn) {
    console.error('[seed] Cannot seed without a MongoDB connection. Set MONGO_URI in .env.');
    process.exit(1);
  }

  await Project.deleteMany({});
  await Experience.deleteMany({});

  await Project.insertMany(projects);
  await Experience.insertMany(experience);

  console.log(`[seed] Inserted ${projects.length} projects and ${experience.length} experiences.`);
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error('[seed] Failed:', err);
  process.exit(1);
});
