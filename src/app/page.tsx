import Footer from "./components/Footer";
import BoxesMain from "./components/mainPage/BoxesMain";
import BoxHome from "./components/mainPage/BoxHome";
import Header from "./components/Header";
import DescriptionMain from "./components/mainPage/DescriptionMain";

export default function Home() {

  const dataBoxes = [
    {title: "Título 1", description: "Descripción 1", linkCertifcate: "#"},
    {title: "Título 2", description: "Descripción 2", linkCertifcate: "#"},
    {title: "Título 3", description: "Descripción 3", linkCertifcate: "#"},
    {title: "Título 4", description: "Descripción 4", linkCertifcate: "#"},
  ]
  
  return (
    <>
      <Header />
      <main className="">
        <BoxHome />
        <DescriptionMain />

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
