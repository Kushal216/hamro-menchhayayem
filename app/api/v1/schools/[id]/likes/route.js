export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET likes for school",
        schoolId: id,
    });
}

export async function POST(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "ADD like to school",
        schoolId: id,
    });
}
