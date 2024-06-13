import Image from "next/image";
import documento from "@/../public/documentos.png";

export default function BoxHome() {
    return (
        <section className="w-full h-[70vh] bg-slate-50 flex items-center">
            <article className="relative w-screen h-[80%]">
                <Image src={documento} alt="Imagen de documentos" fill={true} />
            </article>
        </section>
    );
}