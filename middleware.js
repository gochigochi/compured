import { NextResponse } from "next/server"

export function middleware(req) {

    const accessToken = req.cookies.get("accessToken")
    const isAuth = accessToken?.value === process.env.ADMIN_UNIQUE_IDENTIFIER

    if (req.nextUrl.pathname.startsWith('/login') && isAuth) {
        const url = req.nextUrl.clone()
        url.pathname = "/dashboard"
        return NextResponse.redirect(url)
    }

    if (req.nextUrl.pathname.startsWith('/dashboard') && !isAuth) {
        const url = req.nextUrl.clone()
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }
}

export const config = {
    matcher: ['/login', '/dashboard/'],
}