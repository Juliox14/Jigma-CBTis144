'use client'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import sep from "../../../../public/SEP logo.jpg"
import pie from "../../../../public/pie de pagina.jpeg"

export default function DocumentoPermiso() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <div className="bg-slate-300 py-7 flex items-center justify-center" >
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
                            No. Oficio CB144/SEMAT/PI/2023/578
                        </h3>
                    </section>
                    <section className="mx-7">
                        <h2 className="text-left h-[80px] font-bold">DOCENTES DEL CBTIS 144<br />TURNO MATUTINO</h2>
                        <article>
                            <p className="text-justify font-medium leading-snug">
                                En atención a la solicitud de autorización de permiso <strong>recibida el día 21 de septiembre de 2023</strong> en las oficinas de Control Escolar del turno matutino del Centro de Bachillerato Tecnológico Industrial y de Servicios No. 144, solicitamos de su apoyo para <strong>justificar las inasistencias</strong> de la (el) alumna(o) <strong>MORALES PEREZ CARLOS CESAR</strong> del <strong>QUINTO SEMESTRE grupo “A” de la especialidad en SOPORTE Y MANTENIMIENTO DE EQUIPO DE CÓMPUTO</strong> para el (los) día(s): <strong>21 y 22 de septiembre</strong>.
                                <br /><br />
                                El motivo por el cual se originó la inasistencia es <strong>DE SALUD</strong> y fue justificado debidamente por <strong>ROCIO GUADALUPE PEREZ MORALES, Madre del estudiante</strong> en mención.
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
                    <div className="w-full">
                            <Image src={pie.src} alt="logo de la SEP" width={750} height={0}></Image>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full h-[100px] flex items-center justify-center">
                <button className="bg-white shadow-xl rounded-xl w-[200px] h-[75px] justify-items-center hover:bg-slate-200" onClick={handlePrint}><strong>Descargar Permiso</strong></button>
            </div>
        </>
    )
}
