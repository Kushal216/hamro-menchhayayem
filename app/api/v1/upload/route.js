import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/lib/cloudinery.js";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("image");

        if (!file) {
            return NextResponse.json(
                { error: "No image provided" },
                { status: 400 }
            );
        }

        const uploadResult = await uploadToCloudinary(file);

        return NextResponse.json({
            url: uploadResult.secure_url,
            public_id: uploadResult.public_id,
        });
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
