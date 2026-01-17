import mongoose from "mongoose";
import { connectMongoDB } from "@/lib/db";

const peopleSchema = new mongoose.Schema(
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
            social: {
                facebook: String,
            },
        },
        position: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);


export default mongoose.models.People || (await connectMongoDB(), mongoose.model("People", peopleSchema));
