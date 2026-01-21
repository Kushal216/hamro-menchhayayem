import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const schoolSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      unique: true,
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
      default: 'No description is provided.',
    },
    gallery: {
      type: [String],
      default: [],
    },
    coverImage: {
      type: String,
    },
    location: {
      type: String,
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
