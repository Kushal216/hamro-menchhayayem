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
      type: String,
    },
    contact: {
       phone: {
        type: String,
      },
      website: {
        type: String,
      },
      social: {
        facebook: String,
        instagram: String,
        linkedin: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /.+\@.+\..+/,
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
