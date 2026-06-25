import mongoose from 'mongoose';

/**
 * Connect to MongoDB. Returns the connection on success, or null on failure
 * so the API can still serve seeded/fallback data when no DB is available.
 */
export async function connectDB(uri) {
  if (!uri) {
    console.warn('[db] No MONGO_URI set — running in DB-less mode.');
    return null;
  }
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 });
    console.log('[db] MongoDB connected');
    return mongoose.connection;
  } catch (err) {
    console.error('[db] MongoDB connection failed:', err.message);
    return null;
  }
}

export const isDbConnected = () => mongoose.connection.readyState === 1;
