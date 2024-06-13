import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
    return(
        <header>
            <section className="bg-[#0C231E] h-12">
                <article className="h-full flex justify-center items-center lg:justify-normal lg:gap-6 lg:ml-32">
                    <h1 className="text-white font-semibold lg:text-lg">CBTis 144</h1>
                    <div className="w-auto h-full py-2">
                        <Divider orientation="vertical" className="bg-white mx-2" />
                    </div>
                    <h2 className="text-white text-base">José Emilio Grajales Moguel</h2>
                </article>
            </section>
            <nav className="relative h-16 bg-[#13322B] flex">
                <ul className="w-full h-full flex items-center justify-center gap-10 lg:gap-20">
                    <li>
                        <Link href="#" className="text-white">Inicio</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-white">Acerca de</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-white">Contacto</Link>
                    </li>
                </ul>
                <div className="absolute w-[1em] h-full right-36 py-2">
                    <Divider orientation="vertical" className="bg-white mx-2" />
                </div>
                <div className="absolute w-[10%] h-full right-0 flex items-center justify-center">
                    <Button className="bg-[#1d4b3f] text-white">
                        Cerrar sesión
                    </Button>
                </div>
            </nav>
        </header>
    );

}