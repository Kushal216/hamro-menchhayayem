import mongoose from 'mongoose';

import { connectMongoDB } from '@/lib/db';

const imageSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
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
    },
  },
  { timestamps: true }
);

export default mongoose.models.Image ||
  (await connectMongoDB(), mongoose.model('Image', imageSchema));
