"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import axios from 'axios';

interface BoxesMainProps {
    title: string;
    description: string;
    linkCertifcate: string;
    boxStyle: {backgroundColor: string, boxShadow: string};
}

export default function BoxesMain({ title, description, linkCertifcate, boxStyle }: BoxesMainProps) {
    const [permisoAllowed, setPermisoAllowed] = useState(true);
    const [userData, setUserData] = useState({
        numero_de_control: 0,
        nombre: '',
        apellido: '',
        nombre_tutor: '',
        apellido_tutor: '',
        turno: '',
        semestre: '',
        grupo: '',
        especialidad: ''
    });

    useEffect(() => {
        const getDataAlumno = async () => {
            try {
                const res = await axios.get('/api/data', { withCredentials: true });
                setUserData(res.data);
            } catch (error) {
                console.log('Petición no completada: ', error);
            }
        };
        getDataAlumno();
    }, []);

    const crearConstancia = async () => {
        try {
            const result = await axios.post('/api/docs/constancia', { numero_de_control: userData.numero_de_control });
            const { folio } = result.data;
            window.location.href = `/constancia/doc/${folio}`;
        } catch (error) {
            console.log('Error al crear la constancia:', error);
        }
    };

    const handleLinkClick = (event: React.MouseEvent) => {
        if (title === 'Tramitar constancia') {
            event.preventDefault();
            crearConstancia();
        }
        if (title === 'Tramitar permiso') {
            event.preventDefault();
            revisarPermiso();
        }
    };

    const revisarPermiso = async () => {
        try {
            const result = await axios.get(`/api/revision/${userData.numero_de_control}`);
            const permitido = result.data.permitido;
            if (permitido == false) {
                setPermisoAllowed(false);
                setTimeout(() => {
                    setPermisoAllowed(true);
                }, 2500);
            }
            else {
                window.location.href = '/permiso'
            }
        } catch (error) {
            console.error({ error: error })
        }
    };

    return (
        <>
            {!permisoAllowed && (
                <div className="z-50 fixed top-0 left-0 mt-4 ml-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
                    <strong className="font-bold">¡Parece que has alcanzado el limite de permisos en este semestre!. </strong>
                    <span className="block sm:inline">Por favor acercate a control escolar para más información</span>
                </div>
            )}
            <motion.div className={`p-4 ${boxStyle.backgroundColor} ${boxStyle.boxShadow} rounded-lg shadow-lg w-[90%] cursor-pointer lg:w-[30%]`} whileHover={{ scale: 1.04 }}>
                <Link href={linkCertifcate} onClick={handleLinkClick}>
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    <p className="text-white">{description}</p>
                </Link>
            </motion.div>
        </>
    );
}


