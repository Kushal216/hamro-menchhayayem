import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL;
let isConnected = false;

export async function connectMongoDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(DB_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
}

// export { connectMongoDB };
