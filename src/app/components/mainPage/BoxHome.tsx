import Image from "next/image";
import documento from "../../../../public/documentos.png";
import DescriptionMain from "./DescriptionMain";

export default function BoxHome() {
    return (
        <section className="w-full h-[70vh] bg-slate-50 flex items-center justify-center">
            <article className="relative w-screen h-[80%] md:w-[50%] lg:w-[30%]">
                <Image src={documento} alt="Imagen de documentos" fill={true} />
            </article>
            <article className="hidden lg:w-[50%] lg:block">
                <DescriptionMain />
            </article>
        </section>
    );
}