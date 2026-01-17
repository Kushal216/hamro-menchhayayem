import mongoose from "mongoose";

import { connectMongoDB } from "@lib/db";

const videoSchema = new mongoose.Schema({

    _id: String,
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.models.Video || (await connectMongoDB(), mongoose.model("Video", videoSchema));