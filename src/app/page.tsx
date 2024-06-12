import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#032314] p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo del CBTIS 144 */}
          <div className="flex items-center">
            <Image
              src="/logo-cbtis-144.png" // Asegúrate de tener esta imagen en la carpeta `public` o cambia el enlace según sea necesario.
              alt="Logo CBTIS 144"
              width={50}
              height={50}
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold">CBTIS 144</span>
          </div>
          {/* Navegación */}
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Acerca de</a></li>
              <li><a href="#" className="hover:underline">Ayuda</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Pregunta principal */}
          <h1 className="text-2xl font-bold mb-4">¿Qué deseas hacer?</h1>
          {/* Opciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Opción: Sacar un permiso para faltar */}
            <a href="#" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition duration-200">
              Sacar un permiso para faltar
            </a>
            {/* Opción: Sacar una constancia */}
            <a href="#" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-700 transition duration-200">
              Sacar una constancia
            </a>
            {/* Otras opciones */}
            <a href="#" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-yellow-700 transition duration-200">
              Consultar calificaciones
            </a>
            <a href="#" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-red-700 transition duration-200">
              Ver horario de clases
            </a>
            <a href="#" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition duration-200">
              Contactar al tutor
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 CBTIS 144. Todos los derechos reservados.
      </footer>
    </div>
  );
};
