export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET likes for culture",
        cultureId: id,
    });
}

export async function POST(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "ADD like to culture",
        cultureId: id,
    });
}
