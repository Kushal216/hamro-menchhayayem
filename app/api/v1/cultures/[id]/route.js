export async function GET(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "GET culture by ID",
        id: id,
    });
}

export async function PUT(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "UPDATE culture",
        id: id,
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;

    return Response.json({
        message: "DELETE culture",
        id: id,
    });
}
