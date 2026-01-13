export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET comments for place",
        placeId: id,
    });
}

export async function POST(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "CREATE comment for place",
        placeId: id,
    });
}
