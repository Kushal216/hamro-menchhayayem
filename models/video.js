import mongoose from "mongoose";
import { connectMongoDB } from "@/lib/db.js";

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
        type: Number,
        default:0
    },
    end: {
        type: Number,
    },
    category: {
        type: String,
    },

}, { timestamps: true });

export default mongoose.models.Video || (await connectMongoDB(), mongoose.model("Video", videoSchema));
