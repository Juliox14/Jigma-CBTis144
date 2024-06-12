import { NextApiResponse, NextApiRequest } from "next";
import conn from "../../database/config/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const [rows] = await conn.query('SELECT * FROM alumnos;');
        console.log('Resultado de la consulta:', rows);

        res.status(200).json(rows);
    } catch (error: any) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: error.message });
    }
};
