import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import sign_in from "@/../public/sign_in.png";

export default function Login() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100">
            <section className="flex flex-col items-center justify-center w-full max-w-md space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8">
                <header className="text-3xl font-semibold text-gray-800 dark:text-white text-center">Control de ingreso</header>
                <Divider/>
                <form className="flex flex-col w-full space-y-4">
                    <div className="flex space-x-2">
                        <div className="flex items-center">
                            <div className="relative w-8 h-8">
                                <Image src={sign_in.src} alt="Logo" fill={true} quality={100}/>
                            </div>
                        </div>
                        <Input type="email" label="Número de control" />
                    </div>
                    <Button className="text-base bg-rose-600 text-white hover:bg-rose-500">Iniciar sesión</Button>
                </form>
            </section>
        </main>
    );
}