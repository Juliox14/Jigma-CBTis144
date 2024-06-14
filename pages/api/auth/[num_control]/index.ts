import { NextApiResponse, NextApiRequest } from "next";
import conn from "../../../../database/config/db";
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";
import { Sesion } from "../../interfaces/auth";
const superTokenSecretKey = process.env.JWT_SECRET_KEY;

export default async function alumnoHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const { num_control } = req.query;
        const [rows] = await conn.query(`SELECT * FROM alumnos where numero_de_control = ?`, [num_control]);
        if(rows != undefined){
            const data = rows[0] as Sesion;
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
            numero_de_control: data.numero_de_control,
            nombre: data.nombre,
            apellido: data.apellido,
            nombre_tutor: data.nombre_tutor,
            apellido_tutor: data.apellido_tutor,
            turno: data.turno,
            semestre: data.semestre,
            grupo: data.grupo,
            especialidad: data.especialidad
        }, superTokenSecretKey as string);

        const serialized = serialize('auth', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 + 60 * 60 * 24,
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