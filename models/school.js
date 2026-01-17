import mongoose from 'mongoose';

import { connectMongoDB } from '@lib/db';

const schoolSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: 'No description is provided.',
    },
    gallery: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image',
      },
    ],
    coverImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'image',
    },
    location: {
      type: String,
      required: true,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'video',
    },
    category: {
      type: String,
      default: 'Uncategorized',
    },
    phoneNo: {
      type: String,
      trim: true,
    },
    likesCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.School ||
  (await connectMongoDB(), mongoose.model('School', schoolSchema));
