import { NextApiResponse, NextApiRequest } from "next";
import conn from "../../../../database/config/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    try {
        const { numero_de_control, folio } = req.query;
        const [rows] = await conn.query(`SELECT * FROM relleno_permiso where numero_de_control= ${numero_de_control} AND folio_permiso= ${folio};`);
        console.log(rows);
        res.status(200).json(rows[0]);
    } catch (error: any) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: error.message });
    }
};
