import mongoose from "mongoose";

import { connectMongoDB } from "@/lib/db.js";

const cultureSchema = new mongoose.Schema({
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
            ref: "image",
        }
    ],
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video",
    },
    coverImage:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "image",
    },

    category: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.models.Culture || (await connectMongoDB(), mongoose.model("Culture", cultureSchema));
