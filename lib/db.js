import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

async function connectMongoDB() {
    await mongoose.connect(DB_URL);
    console.log("mongoDB connected sucessfull");
}

module.exports = { connectMongoDB };