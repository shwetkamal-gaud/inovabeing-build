import { connectDB } from "@/config/db";
import { Todo } from "@/models/Todo";
import { getCurrentUser } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET() {
    const user = await getCurrentUser();

    if (!user) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
    await connectDB();

    const todos = await Todo.find({ user: user.userId });
    return NextResponse.json(todos);
}

export async function POST(req: Request) {

    const { title, status } = await req.json();
    const user = await getCurrentUser();

    if (!user) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }
    await connectDB();
    console.log(user)
    const todo = await Todo.create({ title, status, user: user.userId });
    return NextResponse.json(todo);
}
