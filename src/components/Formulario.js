// Import react
import React , {Fragment , useState} from 'react';

// Import UUID
import uuid from 'uuid/v4';

// Formulario component
const Formulario = ({setAppointments}) =>{

    // Appointment state
    const [citas , setCitas] = useState({
        mascota: '',
        propietario: '',
        date: '',
        time: '',
        sintomas: ''
    });

    // Error state
    const [error , updateError] = useState(false);

    // This function updates state when the user types in the form
    const updateState = e =>{
        setCitas({
            ...citas,
            [e.target.name] : e.target.value
        });
    }

    // Extract values
    const {mascota , propietario , date , time , sintomas } = citas;

    // When the user press 'Send form button' exectue this function
    const submitCita = e =>{
        e.preventDefault();

        // Validate form inputs
        if(mascota.trim() === '' || propietario.trim() === '' || date.trim() === '' || time.trim() === ''
        || sintomas.trim() === ''){
            updateError(true);
            return;
        }

        // Clean error
        updateError(false);

        // Assign appointment id
        citas.id = uuid();

        // Create cita
        setAppointments(citas);

    }

    return(
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios.</p> : null}

            <form
                onSubmit = {submitCita}
            >
                <label>Nombre de mascota</label>
                <input 
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre'
                    onChange={updateState}
                    value= {mascota}
                />

                <label>Nombre propietario</label>
                <input 
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre propietario'
                    onChange={updateState}
                    value= {propietario}
                />

                <label>Fecha</label>
                <input 
                    type='date'
                    name='date'
                    className='u-full-width'
                    placeholder=''
                    onChange={updateState}
                    value= {date}
                />

                <label>Hora</label>
                <input 
                    type='time'
                    name='time'
                    className='u-full-width'
                    placeholder='time'
                    onChange={updateState}
                    value= {time}
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={updateState}
                    value={sintomas}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;