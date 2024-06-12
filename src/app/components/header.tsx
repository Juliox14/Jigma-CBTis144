import { Divider } from "@nextui-org/react";

export default function Header() {
    return(
        <header>
            <section className="bg-[#0C231E] h-12">
                <article className="h-full flex items-center gap-6 ml-32">
                    <h1 className="text-white font-semibold text-lg">CBTis 144</h1>
                    <div className="w-auto h-full py-2">
                        <Divider orientation="vertical" className="bg-white" />
                    </div>
                    <h2 className="text-white text-base">José Emilio Grajales Moguel</h2>
                </article>
            </section>
            <nav className="h-16 bg-[#13322B]">
                <ul className="h-full flex items-center justify-center gap-20">
                <li>
                    <a href="#" className="text-white">Inicio</a>
                </li>
                <li>
                    <a href="#" className="text-white">Acerca de</a>
                </li>
                <li>
                    <a href="#" className="text-white">Contacto</a>
                </li>
                </ul>
            </nav>
        </header>
    );

}