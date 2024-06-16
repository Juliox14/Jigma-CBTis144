import Image from "next/image";
import documento from "../../../../public/documentos.png";
import DescriptionMain from "./DescriptionMain";

export default function BoxHome() {
    return (
        <section className="w-full h-[70vh] bg-slate-50 flex items-center justify-center">
            <article className="relative w-[25em] h-[80%] sm:w-[50%] md:w-[50%] lg:w-[30%]">
                <Image src={documento} alt="Imagen de documentos" fill={true} />
            </article>
            <article className="hidden lg:w-[50%] lg:block">
                <DescriptionMain titulo='Modulo express CBTis144' description='¡Bienvenido al Módulo Express del CBTis 144! Nuestro portal web está diseñado para facilitar a estudiantes, padres de familia y personal docente el acceso rápido y eficiente a una variedad de trámites escolares.'/>
            </article>
        </section>
    );
}