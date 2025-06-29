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

    const todos = await Todo.find();
    return NextResponse.json(todos);
}

export async function POST(req: Request) {

    const { title } = await req.json();
    
    await connectDB();
    const todo = await Todo.create({ title });
    return NextResponse.json(todo);
}
