// Import react
import React , {Fragment , useState} from 'react';

// Formulario component
const Formulario = () =>{

    // Appointment state
    const [citas , setCitas] = useState({
        mascota: '',
        propietario: '',
        date: '',
        time: '',
        sintomas: ''
    });

    // This function updates state when the user types in the form
    const updateState = () =>{
        console.log('escribiendo');
    }

    return(
        <Fragment>
            <h2>Crear cita</h2>

            <form>
                <label>Nombre de mascota</label>
                <input 
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre'
                    onChange={updateState}
                />

                <label>Nombre propietario</label>
                <input 
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre propietario'
                    onChange={updateState}
                />

                <label>Fecha</label>
                <input 
                    type='date'
                    name='date'
                    className='u-full-width'
                    placeholder=''
                    onChange={updateState}
                />

                <label>Hora</label>
                <input 
                    type='time'
                    name='time'
                    className='u-full-width'
                    placeholder='time'
                    onChange={updateState}
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={updateState}
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