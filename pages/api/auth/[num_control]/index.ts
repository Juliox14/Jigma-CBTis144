import { NextApiResponse, NextApiRequest } from "next";
import conn from "../../../../database/config/db";
import { SignJWT } from "jose";
import { serialize } from "cookie";

const superTokenSecretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export default async function alumnoHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const { num_control } = req.query;
        const [rows] = await conn.query(`SELECT * FROM alumnos where numero_de_control = ?`, [num_control]);
        if(rows != undefined){
            const { exp, iat, ...userPublic } = rows[0];
            
            const tokenJose = await new SignJWT({...userPublic})
            .setProtectedHeader({alg: 'HS256'})
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(superTokenSecretKey);

            const serialized = serialize('auth', tokenJose, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60,
                path: '/'
            });

            res.setHeader('Set-Cookie', serialized);
            res.status(201).json({status: 'Token creado con éxito'});
        }
        else{
            console.error('Error al crear el token:');
            res.status(500).json({ error: 'No existe el alumno en la base de datos'});
        }
    } catch (error: any) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: error.message });
    }
}