// Import React Library
import React from 'react';

// Cita component
const Cita = ({cita , deleteAppointments}) =>{

    // Destructuring cita
    const {mascota , propietario , date , time , sintomas } = cita;

    return(
        <div className='cita'>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{time}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={() => deleteAppointments(cita.id)}
            >Eliminar &times;</button>
        </div>
    );
}

export default Cita;