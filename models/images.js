import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const imageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim:true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Image ||  (await connectMongoDB(), mongoose.model('Image', imageSchema));
