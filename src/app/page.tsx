import Footer from "./components/Footer";
import BoxesMain from "./components/mainPage/BoxesMain";
import BoxHome from "./components/mainPage/BoxHome";
import Header from "../app/components/header"
import DescriptionMain from "./components/mainPage/DescriptionMain";

export default function Home() {
  
  const dataBoxes = [
    {title: "Tramitar permiso", description: "Tramita tu permiso rapidamente", linkCertifcate: "/permiso"},
    {title: "Tramitar Permiso grupal", description: "Obten permiso grupal en segundos", linkCertifcate: "/constancia"},
    {title: "Tramitar constancia", description: "Obten tu constancia de estudios en segundos", linkCertifcate: "/constancia"}
  ]
  
  return (
    <>
      <Header />
      <main className="">
        <BoxHome />
        <DescriptionMain titulo='Elige lo que deseas realizar' description='Rápido y sencillo, elige una de las opciones y obten el documento en formato PDF:' />

        <section className="flex flex-col items-center my-8 gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
          {dataBoxes.map((data, index) => (
            <BoxesMain key={index} title={data.title} description={data.description} linkCertifcate={data.linkCertifcate}/>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};
