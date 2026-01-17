export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET comments for culture",
        cultureId: id,
    });
}

export async function POST(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "CREATE comment for culture",
        cultureId: id,
    });
}
