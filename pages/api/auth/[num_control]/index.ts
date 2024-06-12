// import { NextApiResponse, NextApiRequest } from "next";
// import db from "../../../../database/config/db";

// export default async function alumnoHandler(req:NextApiRequest, res:NextApiResponse) {
//     if (req.method !== 'GET') {
//         return res.status(405).json({ message: 'Método no permitido' });
//     }

//     try {
//         const {num_control} = req.query;
//         const result = await db.query(`SELECT * FROM alumnos where numero_de_control = ${num_control}`);
//         console.log(result);
//         res.status(201).json(result);
//     } catch (error: any) {
//         console.error('Error en la consulta:', error);
//         res.status(500).json({ error: error.message });
//     }
// }