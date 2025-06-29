import { connectDB } from '@/config/db';
import { User } from '@/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        await connectDB();

        const hashedPassword = await bcrypt.hash(password, 10);

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Password reset successful' });
    } catch (err) {
        console.error('Reset Password Error:', err);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
