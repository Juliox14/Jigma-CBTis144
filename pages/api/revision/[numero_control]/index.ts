import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../../database/config/db";


export default async function revisarPermiso (req: NextApiRequest, res: NextApiResponse  ){
    if(req.method === 'GET'){
        try{
            const {numero_control} = req.query;
            console.log(req.query);
            const [rows] = await db.query(`CALL revisar_permiso(?, @permitido);` , [numero_control]);
            const permitido = rows[0][0].permitido;
            return res.status(200).json({permitido: !!permitido});
        }catch(error){
           return res.status(401).json({error: error});
        }
    }
    else{
        return res.status(400).json({error:"El método no existe"});
    }
}