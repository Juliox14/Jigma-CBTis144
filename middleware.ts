import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const superTokenSecretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
export async function middleware(request: NextRequest){

    const { pathname } = request.nextUrl, 
    jwtCookie = request.cookies.get("auth")?.value as any;

    if(pathname === "/login" && jwtCookie) return NextResponse.redirect(new URL("/", request.url));
    else if(!jwtCookie && pathname === "/login") return NextResponse.next();

    try{
        await jwtVerify(jwtCookie, superTokenSecretKey);
        return NextResponse.next();
    }catch(e){
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/", "/login", "/constancia", "/permiso", "/prueba"],
}