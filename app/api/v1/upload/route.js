import { NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloudinary.js';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const uploadResult = await uploadToCloudinary(file);

    return NextResponse.json({
      message: 'Image Uploaded Successfully',
      url: toWebP(uploadResult.secure_url),
      public_id: uploadResult.public_id,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function toWebP(cloudinaryUrl) {
  if (!cloudinaryUrl.includes('/upload/')) return cloudinaryUrl;
  return cloudinaryUrl.replace('/upload/', '/upload/f_webp,q_auto/');
}

