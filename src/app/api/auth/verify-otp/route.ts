import { connectDB } from '@/config/db'
import {User} from '@/models/User'
import { NextResponse, NextRequest } from 'next/server'
import { deleteOtp, verifyOtp } from '@/utils/otpStore'
import { generateTokenAndSetCookie } from '@/utils/generateToken'

export async function POST(req: NextRequest) {
    const { email, otp, isForgot } = await req.json()
    await connectDB()

    const valid = await verifyOtp(email, otp);

    if (!valid) {
        return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 })
    }
    const user = await User.findOneAndUpdate(
        { email },
        { isVerified: true },
        { new: true }
    )

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    deleteOtp(email)
    if(!isForgot){
        await generateTokenAndSetCookie(user._id?.toString()??'')
        return NextResponse.json({ message: 'OTP verified', _id: user._id, interests: user.inresets, name: user.name, email: user.email })
    }
    else{
        return NextResponse.json({ message: 'OTP verified'})
    }
}
