import mongoose from 'mongoose';
import { connectMongoDB } from '@lib/db.js';

const tourismSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: 'No description provided.',
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
      default:"Menchhayayem rural municipality"
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'video',
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Tourism ||
  (await connectMongoDB(), mongoose.model('Tourism', tourismSchema));
