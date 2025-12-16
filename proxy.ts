// middleware for nextJS do not go to dashboard route until login creds match env file
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone();
    if (url.pathname === '/dashboard') {
        const isLoggedIn = request.cookies.get('loggedIn')?.value === 'true';
        if (!isLoggedIn) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}