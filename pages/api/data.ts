import { NextApiRequest, NextApiResponse } from "next";
import { jwtVerify } from "jose";

const superTokenSecretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

export default async function dataHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET"){
        return await getData(req, res);
    }
    else {
        return res.status(400).json({error:"El método no existe"});
    };
};


const getData = async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.cookies || !req.cookies.auth || req.cookies.auth === "") {
        return res.status(401).json({ error: "Authentication token missing" });
    }

    const { auth } = req.cookies;
    try {
        const data = (await jwtVerify(auth, superTokenSecretKey)).payload;
        return res.status(200).json({ numero_de_control: data.numero_de_control , nombre: data.nombre, apellido: data.apellido, nombre_tutor: data.nombre_tutor , apellido_tutor: data.apellido_tutor, turno: data.turno, semestre: data.semestre, grupo: data.grupo, especialidad: data.especialidad  });
    } catch (error) {
        return res.status(401).json({ error: "Invalid authentication token" });
    }
};