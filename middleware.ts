import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    
    // Protect /dashboard route
    if (url.pathname.startsWith('/dashboard')) {
        const isLoggedIn = request.cookies.get('loggedIn')?.value === 'true';
        if (!isLoggedIn) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'],
};
