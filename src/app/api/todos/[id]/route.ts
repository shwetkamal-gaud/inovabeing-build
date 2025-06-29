import { connectDB } from "@/config/db";
import { Todo } from "@/models/Todo";
import { getCurrentUser } from "@/utils/auth";
import { NextResponse, NextRequest } from "next/server";
type tParams = Promise<{ id: string }>;
export async function PUT(req: NextRequest, context: { params: tParams } ) {
    const { title, status } = await req.json();
    const user = await getCurrentUser();
    const { id } = await context.params
    if (!user) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
    await connectDB();
    const updated = await Todo.findByIdAndUpdate(id, { title, status }, { new: true });
    return NextResponse.json(updated);
}

export async function DELETE(_: NextRequest, context: { params: tParams }  ) {
    const user = await getCurrentUser();
    const { id } = await context.params
    if (!user) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
    await connectDB();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted" });
}
