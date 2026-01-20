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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "people",
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

export default mongoose.models.Literature || (await connectMongoDB(), mongoose.model("Literature", literatureSchema));