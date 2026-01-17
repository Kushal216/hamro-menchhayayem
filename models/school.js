import mongoose from "mongoose";

import { connectMongoDB } from "@lib/db";

const schoolSchema = new mongoose.Schema({
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
    phoneNo: {
        type: String,
        required: true,
    },



}, { timestamps: true });

export default mongoose.models.School || (await connectMongoDB(), mongoose.model("School", schoolSchema));