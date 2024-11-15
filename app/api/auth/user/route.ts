import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function GET(req: NextRequest) {
    const token = req.cookies.get('token')?.value; // Access token from cookies

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // Fetch user data based on decoded information
        // Example: const user = await getUserFromDatabase(decoded.id);
        return NextResponse.json(decoded); // Return user data
    } catch (error) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }
}