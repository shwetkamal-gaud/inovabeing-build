import { connectDB } from '@/config/db'
import { User } from '@/models/User'
import { generateOtp } from '@/utils/generateOtp'
import { sendOtpEmail } from '@/utils/mailer'
import { setOtp } from '@/utils/otpStore'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    const {  email } = await req.json()
    await connectDB()

    const userExists = await User.findOne({ email })

    const otp = generateOtp()

    if (!userExists) {
        return NextResponse.json({ error: 'Email not found' }, { status: 400 })
    }

    
    setOtp(email, otp);
    await sendOtpEmail(email, otp)

    return NextResponse.json({ message: 'OTP sent to email' })
}
