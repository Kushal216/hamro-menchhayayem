import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

async function connectMongoDB() {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

module.exports = { connectMongoDB };
