import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const cultureSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique:true,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: 'No description provided.',
    },
    gallery: {
      type: [String],
      default: [],
    },

    video: {
      id: {
        type: String,
      },
      start: {
        type: String,
      },
      end: {
        type: String,
      },
    },
    coverImage: {
      type: String,
    },
    caste: {
      type: String,
      trim: true,
      default: 'all',
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
