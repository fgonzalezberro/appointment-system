// Import react
import React , {Fragment} from 'react';

// Formulario component
const Formulario = () =>{
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
                />

                <label>Nombre propietario</label>
                <input 
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre propietario'
                />

                <label>Fecha</label>
                <input 
                    type='date'
                    name='date'
                    className='u-full-width'
                    placeholder=''
                />

                <label>Hora</label>
                <input 
                    type='time'
                    name='time'
                    className='u-full-width'
                    placeholder='time'
                />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
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