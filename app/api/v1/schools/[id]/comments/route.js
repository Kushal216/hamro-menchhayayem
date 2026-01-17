export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET comments for school",
        schoolId: id,
    });
}

export async function POST(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "CREATE comment for school",
        schoolId: id,
    });
}
