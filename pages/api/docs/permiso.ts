import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../database/config/db"

export default async function permisoPost(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    } else {
        try {
            const { numero_de_control, fechas_permiso, motivo } = req.body;

            const [rows] = await conn.query('CALL crear_permiso(?, ?, ?)', [numero_de_control, fechas_permiso, motivo]);
            const resultado = rows[0]; 
            if (resultado.length > 0) {
                const { folio_permiso_creado } = resultado[0];
                return res.status(200).json({ folio: folio_permiso_creado });
            } else {
                return res.status(400).json({ error: "No se pudo obtener el folio del permiso" });
            }
        } catch (error) {
            console.error("Error al enviar los datos, inténtelo de nuevo más tarde o comuníquese con un administrador:", error);
            return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });
        }
    }
}
