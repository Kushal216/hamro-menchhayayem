import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const placesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gallery: {
      type: [String],
    },
    coverImage: {
      type: String,
    },
    location: {
      type: String,
      default: 'https://maps.app.goo.gl/oXDceELyBk9nRick8',
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
    region: {
      type: String,
      default: 'menchhayayem',
      enum: ['menchhayayem', 'morahang', 'shreejung', 'paunthak'],
    },
    category: {
      type: String,
      default: 'place',
    },
    likesCount: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Places ||
  (await connectMongoDB(), mongoose.model('Places', placesSchema));
