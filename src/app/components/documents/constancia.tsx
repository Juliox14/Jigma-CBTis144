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
            <div className="bg-slate-300 flex items-center justify-center py-7" >
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
                            Constancia de Estudio<br />
                            No. Oficio CB144/SEMAT/CS/2023/090
                        </h3>
                    </section>
                    <section className="mx-7">
                        <h2 className="text-left h-[80px] font-bold">A QUIEN CORRESPONDA<br />P R E S E N T E</h2>
                        <article>
                            <p className="text-justify font-medium leading-snug">
                                El que suscribe, director del Centro de Bachillerato Tecnológico industrial y de servicios
                                No.144, con clave 07DCT0001Z, hace constar que el (la) alumno (a) <strong>GONZALEZ OCHOA
                                FABRICIO YAEL</strong>, con número de control <strong>2307051440193</strong>, se encuentra inscrito en esta
                                Institución Educativa, cursando el <strong>TERCER</strong> semestre de la carrera de <strong>TÉCNICO EN
                                OFIMÁTICA</strong>, grupo <strong>“A”</strong>, turno <strong>Matutino</strong>.
                                <br /><br /><br />
                                Durante el periodo comprendido del 28 de agosto al 12 de diciembre de 2023.
                                <br />Receso intersemestral del 13 de diciembre de 2023 al 05 de febrero de 2024
                                <br /><br /><br />
                                    Se extiende la presente a petición del (la) interesado(a) para los fines legales que le
                                    convengan, en la ciudad de Tuxtla Gutiérrez, Chiapas, a los <strong>CUATRO</strong> día(s) del mes de 
                                    <strong> SEPTIEMBRE DEL 2023</strong>.
                                <br /><br /><br /><br />
                                <strong>ATENTAMENTE</strong>
                                <br /><br />
                            </p>
                            <p className="mt-[170px] font-[24px] leading-snug">
                                <strong>C.P. IGNACIO ROMEO MENDEZ RUIZ<br />
                                DIRECTOR DEL PLANTEL</strong>
                            </p>
                        </article>
                    </section>
                    <div className="w-full mt-[20px]">
                            <Image src={pie.src} alt="logo de la SEP" width={750} height={0}></Image>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full h-[100px] flex items-center justify-center">
                <button className="bg-white shadow-xl rounded-xl w-[200px] h-[75px] justify-items-center hover:bg-slate-200" onClick={handlePrint}>Descargar constancia</button>
            </div>
        </>
    )
}