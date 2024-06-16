import Footer from "./components/Footer";
import BoxesMain from "./components/mainPage/BoxesMain";
import BoxHome from "./components/mainPage/BoxHome";
import Header from "../app/components/header"
import DescriptionMain from "./components/mainPage/DescriptionMain";

export default function Home() {
  
  const stylesBoxes = {
    box1: {
      backgroundColor: "bg-red-800",
      boxShadow: "shadow-red-800/50",
    },
    box2: {
      backgroundColor: "bg-[#13322B]",
      boxShadow: "shadow-[#13322B]/50",
    },
    box3: {
      backgroundColor: "bg-black",
      boxShadow: "shadow-black/50",
    },
  }

  const dataBoxes = [
    {title: "Tramitar permiso", description: "Tramita tu permiso rapidamente", linkCertifcate: "/permiso", boxStyle: stylesBoxes.box1},
    {title: "Tramitar permiso grupal", description: "Obten permiso grupal en segundos", linkCertifcate: "/constancia", boxStyle: stylesBoxes.box2},
    {title: "Tramitar constancia", description: "Obten tu constancia de estudios en segundos", linkCertifcate: "/constancia", boxStyle: stylesBoxes.box3}
  ]
  
  return (
    <>
      <Header />
      <main className="">
        <BoxHome />
        <DescriptionMain titulo='Elige lo que deseas realizar' description='Rápido y sencillo, elige una de las opciones y obten el documento en formato PDF:' />

        <section className="flex flex-col items-center my-8 gap-6 lg:flex-row lg:flex-wrap lg:justify-center">
          {dataBoxes.map((data, index) => (
            <BoxesMain key={index} title={data.title} description={data.description} linkCertifcate={data.linkCertifcate} boxStyle={data.boxStyle}/>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};
