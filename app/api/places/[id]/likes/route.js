export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET likes for place",
        placeId: id,
    });
}

export async function POST(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "ADD like to place",
        placeId: id,
    });
}
