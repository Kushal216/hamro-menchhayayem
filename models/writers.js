import mongoose from 'mongoose';
import { connectMongoDB } from '@/lib/db.js';

const writerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
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
    },
    { timestamps: true }
);

export default mongoose.models.Writers || (await connectMongoDB(), mongoose.model('Writers', writerSchema));
