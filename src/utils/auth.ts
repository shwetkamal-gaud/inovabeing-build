import { cookies } from 'next/headers';
import { verifyToken } from './verifyToken';

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const token =  cookieStore.get('jwt')?.value;

    if (!token) return null;

    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') return null;

    
    return decoded;
}