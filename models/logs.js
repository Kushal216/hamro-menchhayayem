import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const cultureSchema = new mongoose.Schema(
  {
    user: {
      name: { type: String, required: true },
      email: {
        type: String,
      },
      id: {
        type: String,
        required: true,
      },
    },
    activity: {
      type: String,
      enum: ['login', 'logout', 'create', 'update', 'delete'],
      required: true,
    },
    item: {
      id: { type: String },
      type: { type: String },
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Logs ||
  (await connectMongoDB(), mongoose.model('Logs', cultureSchema));
