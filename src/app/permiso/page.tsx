'use client'
import { useState } from 'react';
import axios from 'axios';

const Permiso = () => {
    const [motivo, setMotivo] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFinal, setFechaFinal] = useState('');
    const [userData, setUserData] = useState({
        numero_de_control: '',
        nombre: '',
        apellido: '',
        nombre_tutor: '',
        apellido_tutor: '',
        turno: '',
        semestre: '',
        grupo: '',
        especialidad: ''
    });

    const getDataAlumno = async () => {
        try {
            const res = await axios.get('/api/data', { withCredentials: true });
            setUserData(res.data);
        } catch (error) {
            console.log('Petición no completada: ', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long' }).format(date);
    };
    
    const formatFechaAusencia = (fechaInicio, fechaFinal) => {
        const fechaInicioDate = new Date(fechaInicio);
        const fechaFinalDate = new Date(fechaFinal);
    
        if (fechaInicio === fechaFinal) {
            return formatDate(fechaInicio);
        }
    
        // Obtener los días y meses
        const diaInicio = fechaInicioDate.getDate();
        const diaFinal = fechaFinalDate.getDate();
        const mesInicio = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(fechaInicioDate);
        const mesFinal = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(fechaFinalDate);
    
        // Si las fechas están en el mismo mes
        if (mesInicio === mesFinal) {
            let dias = [] as any;
    
            for (let i = diaInicio; i <= diaFinal; i++) {
                if (i === diaFinal && diaFinal - diaInicio > 1) {
                    dias.push("y " + i);
                } else if (i === diaFinal) {
                    dias.push(i);
                } else if (i === diaFinal - 1) {
                    dias.push(i + " y");
                } else {
                    dias.push(i);
                }
            }
            return `${dias.join(", ")} de ${mesInicio}`;
        }
    
        // Si las fechas están en meses diferentes
        return `${diaInicio} de ${mesInicio} hasta ${diaFinal} de ${mesFinal}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        getDataAlumno();

        const permisoData = {
            numero_de_control: userData.numero_de_control,
            
            motivo,
            fechas: formatFechaAusencia(fechaInicio, fechaFinal),
        };

        try {
            const response = await axios.post('/api/docs/permiso', permisoData);

            if (response.status === 200) {
                console.log('Solicitud enviada con éxito');
                setMotivo('');
                setFechaInicio('');
                setFechaFinal('');
            } else {
                console.error('Error al enviar la solicitud');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Solicitar Permiso</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">Motivo del permiso</label>
                        <select
                            id="motivo"
                            name="motivo"
                            className="block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            value={motivo}
                            onChange={(e) => setMotivo(e.target.value)}
                            required
                        >
                            <option value="" disabled hidden>Seleccione un motivo</option>
                            <option value="Motivos de salud">Motivos de salud</option>
                            <option value="Motivos personales">Motivos personales</option>
                            <option value="Cita médica">Cita médica</option>
                            <option value="Fallecimiento familiar">Fallecimiento familiar</option>
                            <option value="Participación en evento deportivo">Participación en evento deportivo</option>
                            <option value="Trámite oficial">Trámite oficial</option>
                        </select>
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