const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0e2c1e]">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-300 mb-8">Página no encontrada</p>
                <p className="text-gray-400 mb-8">Lo sentimos, la página que buscas no existe.</p>
                <a href="/" className="text-lg text-gray-300 hover:text-white transition duration-300">Volver a la página de inicio</a>
            </div>
        </div>
    );
};

export default NotFound;
