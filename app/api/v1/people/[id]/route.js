export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET person by ID",
        id: id,
    });
}

export async function PUT(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "UPDATE person",
        id: id,
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "DELETE person",
        id: id,
    });
}
