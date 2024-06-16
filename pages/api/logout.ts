import { NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import {serialize} from 'cookie'
const superTokenSecretKey = process.env.JWT_SECRET_KEY;

export default function logoutHandler (req: NextApiRequest, res: NextApiResponse) {
    if (!req.cookies || !req.cookies.auth || req.cookies.auth === "") {
        return res.status(401).json({ error: "Authentication token missing" });
    }

    const { auth } = req.cookies;
    try {
        verify(auth, superTokenSecretKey as string);
        const serialized = serialize('auth', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        });
        res.setHeader('Set-Cookie', serialized);
        res.status(200).json('Logout succesfully')
    }
    catch(error){
        return res.status(401).json({error: 'invalid token'})
    }

}