import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const peopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'image',
    },
    contact: {
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /.+\@.+\..+/,
      },
      phone: {
        type: String,
      },
      social: {
        facebook: String,
      },
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.People || (await connectMongoDB(), mongoose.model('People', peopleSchema));
