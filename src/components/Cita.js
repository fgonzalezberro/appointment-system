// Import React Library
import React from 'react';

// Cita component
const Cita = ({cita}) =>{

    // Destructuring cita
    const {mascota , propietario , date , time , sintomas } = cita;
    console.log(mascota);

    return(
        <div className='cita'>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{time}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
        </div>
    );
}

export default Cita;