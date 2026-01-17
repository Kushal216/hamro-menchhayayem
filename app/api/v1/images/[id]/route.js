export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET image by ID",
        id: id,
    });
}

export async function PUT(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "UPDATE image",
        id: id,
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "DELETE image",
        id: id,
    });
}
