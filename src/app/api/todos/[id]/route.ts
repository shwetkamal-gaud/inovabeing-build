import { connectDB } from "@/config/db";
import { Todo } from "@/models/Todo";
import { getCurrentUser } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { title, status } = await req.json();
    const user = await getCurrentUser();

    if (!user) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
    await connectDB();
    const updated = await Todo.findByIdAndUpdate(params.id, { title, status }, { new: true });
    return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    const user = await getCurrentUser();

    if (!user) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
    await connectDB();
    await Todo.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted" });
}
