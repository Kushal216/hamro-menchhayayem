export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET school by ID",
        id: id,
    });
}

export async function PUT(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "UPDATE school",
        id: id,
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "DELETE school",
        id: id,
    });
}
