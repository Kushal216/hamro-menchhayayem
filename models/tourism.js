import mongoose from "mongoose";

import { connectMongoDB } from "@lib/db";

const tourismSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    galary: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "image",
        }
    ],
    coverImage:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "image",
    },
    location: {
        type: String,
        required: true,
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video",
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.models.Tourism || (await connectMongoDB(), mongoose.model("Tourism", tourismSchema));