import mongoose from 'mongoose';

import { connectMongoDB } from '@/lib/db.js';

const cultureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "No description provided."
    },
    gallery: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image',
      },
    ],
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'video',
    },
    coverImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'image',
    },
    category: {
      type: String,
      trim: true,
      default: "Uncategorized"
    },
    likesCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Culture ||
  (await connectMongoDB(), mongoose.model('Culture', cultureSchema));
