import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { folder: "hamro-menchhayayem" },
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            }
        ).end(buffer);
    });
}
