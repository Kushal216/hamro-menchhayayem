export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET place by ID",
        id: id,
    });
}

export async function PUT(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "UPDATE place",
        id: id,
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "DELETE place",
        id: id,
    });
}
