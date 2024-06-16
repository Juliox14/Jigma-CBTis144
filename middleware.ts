import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest){

    let jwtCookie = request.cookies.get("jwt");

    try{
        let decoded = jwt.verify(jwtCookie, process.env.JWT_SECRET_KEY);
        return NextResponse.next();
    }catch(e){
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/"]
}