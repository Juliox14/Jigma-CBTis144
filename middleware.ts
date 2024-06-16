import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest){

    let jwtCookie = request.cookies.get("jwt");

    try{
        let decoded = jwt.verify(jwtCookie, process.env);
    }catch(e){
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if(true){
        return NextResponse.next();
    }
    
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {

    matcher: ["/login"]

}