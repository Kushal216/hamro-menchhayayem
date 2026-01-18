import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: 'contributer',
      enum: ['contributer', 'admin'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  (await connectMongoDB(), mongoose.model('User', userSchema));
