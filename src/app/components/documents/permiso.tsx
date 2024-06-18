'use client'
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import sep from "../../../../public/SEP logo.jpg"
import pie from "../../../../public/pie de pagina.jpeg"
import axios from "axios";

export default function DocumentoPermiso({folio}) {

    const [fechaFormateada, setFechaFormateada] = useState('');
    const [dataPermiso, setDataPermiso] = useState({
        folio_permiso: '',
        turno: '',
        fecha_recepcion: '',
        apellido: '',
        nombre: '',
        semestre: '',
        grupo: '',
        especialidad: '',
        fechas_permiso: '',
        motivo: '',
        nombre_tutor: '',
        apellido_tutor: ''
    });

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

    useEffect(()=>{
        const getDatos = async()=> {
        try{
            if(userData.numero_de_control !== 0){
                console.log(userData.numero_de_control)
                const data = await axios.get(`/api/docs/perm`, {params: 
                    {
                        numero_de_control: userData.numero_de_control,
                        folio: folio
                    }
                });
                setDataPermiso(data.data);
            }
        }
        catch(error){
            console.log('Petición no completada: ',error);
        }
    };
    getDatos();
    },[userData]);

    useEffect(()=>{
        if(dataPermiso !== undefined){
            const fecha= new Date(dataPermiso.fecha_recepcion);
            const fechaFormateada = dataPermiso.fecha_recepcion = fecha.toLocaleDateString("es-ES", {day: "numeric",
                month: "long",
                year: "numeric",
            });;
            setFechaFormateada(fechaFormateada);
        }
    }, [dataPermiso]);
    
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            {dataPermiso !== undefined &&
            <div className="bg-slate-300 py-7 flex items-center justify-center " >
                <div className="bg-white p-10 pt-8 pb-0 w-[220mm] h-[284.5mm] overflow-auto text-black" ref={componentRef}>
                    <header className="flex flex-row items-center pr-10">
                        <div className="inline">
                            <Image src={sep.src} alt="logo de la SEP" width={300} height={0}></Image>
                        </div>
                        <div className="w-[2px] h-[42px] bg-[#C59553]">
                        </div>
                        <h3 className="mt-3 text-[10px] font-semibold inline-block text-end ml-auto leading-tight"><strong className="">Subsecretaría de Educación Media Superior<br/>
                            Dirección General de Educación Tecnológica Industrial y Servicios<br/></strong>
                            Centro de Bachillerato Tecnológico Industrial y de Servicios No. 144<br/>
                            “José Emilio Grajales Moguel”<br/>
                            C.C.T. 07DCT0001Z
                        </h3>
                    </header>
                    <section className="flex justify-end items-center h-[100px]">
                        <h3 className="text-end text-[13px] font-medium mr-7">
                            Permiso<br/>
                            No. Oficio CB144/SEMAT/PI/2024/{dataPermiso.folio_permiso}
                        </h3>
                    </section>
                    <section className="mx-7">
                        <h2 className="text-left h-[80px] font-bold">DOCENTES DEL CBTIS 144<br />TURNO {dataPermiso.turno}</h2>
                        <article>
                            <p className="text-justify font-medium leading-snug">
                                En atención a la solicitud de autorización de permiso <strong>recibida el {fechaFormateada}</strong> en las oficinas de Control Escolar del turno {dataPermiso.turno.toLowerCase()} del Centro de Bachillerato Tecnológico Industrial y de Servicios No. 144, solicitamos de su apoyo para <strong>justificar las inasistencias</strong> de la (el) alumna(o) <strong>{dataPermiso.nombre } {dataPermiso.apellido }</strong> del <strong>{dataPermiso.semestre} SEMESTRE grupo “{dataPermiso.grupo}” de la especialidad en {dataPermiso.especialidad}</strong> para el (los) día(s): <strong>{dataPermiso.fechas_permiso}</strong>.
                                <br /><br />
                                El motivo por el cual se originó la inasistencia es debido a <strong>{dataPermiso.motivo.toLowerCase()}</strong> y fue justificado debidamente por <strong>{dataPermiso.nombre_tutor } {dataPermiso.apellido_tutor }, tutor del estudiante</strong> en mención.
                                <br /><br />
                                Se informó a la (el) solicitante que los permisos cubren las faltas, pero no permiten reponer exámenes, ni actividades realizadas dentro del aula en las fechas de la inasistencia, quedando a consideración de cada docente y a las reglas de trabajo en aula estipuladas por ustedes, el proceder. Así mismo, los permisos tramitados fuera de tiempo o de más de tres días son autorizados por la subdirección o dirección del plantel.
                                <br /> <br />Agradecemos su apoyo y quedamos atentos a sus comentarios.
                                <br /><br />ATENTAMENTE
                            </p>
                            <p className="mt-[170px] font-[24px] leading-snug">
                                <strong>Johana Miranda Granados
                                <br />Jefa de Servicios Escolares Turno Matutino</strong>
                            </p>
                        </article>
                    </section>
                    <div className="w-full mt-10">
                            <Image src={pie.src} alt="logo de la SEP" width={750} height={0}></Image>
                    </div>
                </div>
                <button className="bg-[#0D5C33] shadow-xl rounded-xl w-[200px] h-[75px] bottom-1 left-10 fixed justify-items-center text-white p-2.5 hover:bg-[#3a9571]" onClick={handlePrint}><strong>Descargar Permiso</strong></button>
            </div>    
            }
        </>
    )
}
