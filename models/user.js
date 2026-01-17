import mongoose from "mongoose";
import { connectMongoDB } from "@lib/db";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        photo:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "image",
        },
        contact: {

            email: {
                type: String,
                required: true,
                unique: true,
            },
            phone: {
                type: String,
            },
            website: {
                type: String,
            },
            social: {
                mail: String,
                facebook: String,
                instagram: String,
                linkedin: String,
            },
        },
        role: {
            type: String,
            default: "contributer",
            enum: ["contributer", "admin"],
        },
        password: {
            type: String,
            required: true,
            select:false
        },
    },
    { timestamps: true }
);


export default mongoose.models.User || (await connectMongoDB(), mongoose.model("User", userSchema));
