'use client'
import { useState } from 'react';

const Permiso = () => {
    // Estados para manejar los datos del formulario
    const [motivo, setMotivo] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Agregar la lógica para enviarlos a la API permiso
        console.log('Motivo:', motivo);
        console.log('Fecha de inicio:', fechaInicio);
        console.log('Fecha final:', fechaFinal);

        // Resetea los campos del formulario después de enviar
        setMotivo('');
        setFechaInicio('');
        setFechaFinal('');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Solicitar Permiso</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">Motivo del permiso</label>
                        <textarea
                            id="motivo"
                            name="motivo"
                            rows={4}
                            className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={motivo}
                            onChange={(e) => setMotivo(e.target.value)}
                            placeholder="Describa el motivo del permiso"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fechas" className="block text-sm font-medium text-gray-700 mb-2">Fecha(s) de ausencia</label>
                        <div id='fechas'>
                            <label htmlFor="fecha_inicio" className="block text-xs font-medium text-gray-700 mb-2">Desde: </label>
                            <input
                                type="date"
                                id="fecha_inicio"
                                name="fecha_inicio"
                                className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={fechaInicio}
                                onChange={(e) => setFechaInicio(e.target.value)}
                                placeholder="Seleccione la fecha de inicio"
                                required
                            />
                            <label htmlFor="fecha_final" className="mt-2 block text-xs font-medium text-gray-700 mb-2">Hasta: </label>
                            <input
                                type="date"
                                id="fecha_final"
                                name="fecha_final"
                                className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={fechaFinal}
                                onChange={(e) => setFechaFinal(e.target.value)}
                                placeholder="Seleccione la fecha final"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2.5 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Enviar Solicitud
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Permiso;
