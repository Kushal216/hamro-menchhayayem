import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';


const placesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
    default: 'Menchhayayem rural municipality',
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
  likesCount: {
    type: Number,
    default: 0,
    min: 0,
  },
},
  { timestamps: true }
);

export default mongoose.models.Places || (await connectMongoDB(), mongoose.model("Places", placesSchema));