'use client'

import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useState, useRef} from "react";
import Image from "next/image";
import sign_in from "../../../public/sign_in.png";
import axios from "axios";
// import sign_in from "@/../public/sign_in.png";

export default function Login() {
    const formRef = useRef(null) as any;
    const [numeroControl, setNumeroControl] = useState('');
    const [alumnoError, setAlumnoError] = useState(false);

    const handleInputChange = (event) => {
        setNumeroControl(event.target.value);
    };

    const alumnHandler = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.get(`/api/auth/${numeroControl}`);
            window.location.href = '/';
        }
        catch(error){
            console.error('Error al iniciar sesión:', error);
            setAlumnoError(true);
            setTimeout(() => {
                setAlumnoError(false);
            }, 2500);
        } finally {
            if (formRef.current) {
                formRef.current.reset();
            }
        }
        
        

    };
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100">
            <section className="flex flex-col items-center justify-center w-full max-w-md space-y-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8">
                <header className="text-3xl font-semibold text-gray-800 dark:text-white text-center">Control de ingreso</header>
                <Divider/>
                <form className="flex flex-col w-full space-y-4" ref={formRef}>
                    <div className="flex space-x-2">
                        <div className="flex items-center">
                            <div className="relative w-8 h-8">
                                {/* <Image src={sign_in.src} alt="Logo" fill={true} quality={100}/> */}
                            </div>
                        </div>
                        <Input 
                            type="tel" 
                            label="Número de control" 
                            value={numeroControl}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Button className="text-base bg-rose-600 text-white hover:bg-rose-500" onClick={alumnHandler}>Iniciar sesión</Button>
                </form>
            </section>
        </main>
    );
}