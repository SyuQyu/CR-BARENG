import { NextRequest, NextResponse } from "next/server";

const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL_PROD}/api/v1/users`;

// GET /api/users/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const res = await fetch(`${BASE_URL}/${params.id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
}

// PUT /api/users/[id]
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { username, email, password } = await req.json();
    const url = new URL(`${BASE_URL}/${params.id}`);
    url.searchParams.set("username", username);
    url.searchParams.set("email", email);
    url.searchParams.set("password", password);

    const res = await fetch(url.toString(), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
}

// DELETE /api/users/[id]
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const res = await fetch(`${BASE_URL}/${params.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
}