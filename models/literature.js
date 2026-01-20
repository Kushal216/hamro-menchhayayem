import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';


const literatureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
  },
  video: {
    type: String,
  },
  category: {
    type: String,
  },
  likesCount: {
    type: Number,
    default: 0,
    min: 0,
  },
},
  { timestamps: true }
);

export default mongoose.models.Places || (await connectMongoDB(), mongoose.model("Places", literatureSchema));