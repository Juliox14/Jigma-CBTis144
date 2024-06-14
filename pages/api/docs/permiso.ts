import { NextApiRequest, NextApiResponse } from "next";
import conn from "../../../database/config/db"
import { error } from "console";
export default function permisoPost (req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST'){
        res.status(405).json({error: 'Método no permitido'})
    }else{
        try{
            const {numero_de_control, fechas_permiso, motivo} = req.body;
            const result = conn.query('CALL crear_permiso(? , ? , ?)', [numero_de_control, fechas_permiso, motivo]);
            return res.status(200).json(result);
        } catch (error) {
            console.error("Error al enviar los datos, inténtelo de nuevo más tarde o comníquese con un administrador:", error);
            return res.status(500).json({ error: "Hubo un problema al procesar la solicitud" });

        }
    }
}