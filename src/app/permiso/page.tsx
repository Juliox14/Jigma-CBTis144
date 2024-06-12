'use client'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Permiso = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <div className="flex items-center justify-center bg-gray-100" >
                <div className="bg-white p-10 shadow-lg w-[220mm] h-[284.5mm] overflow-auto text-black" ref={componentRef}>
                    <h2 className="text-left text-l font-bold mb-8">DOCENTES DEL CBTIS 144<br />TURNO MATUTINO</h2>
                    <section className="mt-5">
                        <p className="text-justify leading-relaxed text-base">
                            En atención a la solicitud de autorización de permiso <strong>recibida el día 21 de septiembre de 2023</strong> en las oficinas de Control Escolar del turno matutino del Centro de Bachillerato Tecnológico Industrial y de Servicios No. 144, solicitamos de su apoyo para <strong>justificar las inasistencias</strong> de la (el) alumna(o) <strong>MORALES PEREZ CARLOS CESAR</strong> del <strong>QUINTO SEMESTRE grupo “A” de la especialidad en SOPORTE Y MANTENIMIENTO DE EQUIPO DE CÓMPUTO</strong> para el (los) día(s): <strong>21 y 22 de septiembre</strong>.
                            <br /><br />
                            El motivo por el cual se originó la inasistencia es <strong>DE SALUD</strong> y fue justificado debidamente por <strong>ROCIO GUADALUPE PEREZ MORALES, Madre del estudiante</strong> en mención.
                            <br /><br />
                            Se informó a la (el) solicitante que los permisos cubren las faltas, pero no permiten reponer exámenes, ni actividades realizadas dentro del aula en las fechas de la inasistencia, quedando a consideración de cada docente y a las reglas de trabajo en aula estipuladas por ustedes, el proceder. Así mismo, los permisos tramitados fuera de tiempo o de más de tres días son autorizados por la subdirección o dirección del plantel.
                            Agradecemos su apoyo y quedamos atentos a sus comentarios.
                        </p>
                    </section>
                </div>
            </div>
            <button className="bg-red w-5 justify-items-center" onClick={handlePrint}>Print article</button>
            
        </>
    )
};

export default Permiso;

