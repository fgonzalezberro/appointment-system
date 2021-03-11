// Import React 
import React, {Fragment , useState} from 'react';

// Import components
import Formulario from './components/Formulario';
import Cita from './components/Cita';

// Import CSS 
import './index.css';


function App() {

  // State citas
  const [appointments , saveAppointments] = useState([]);

  // Function to save appointments
  const setAppointments = citas =>{
    saveAppointments([
      ...appointments,
      citas
    ]);
  }

  // Function to delete appointments for ID
  const deleteAppointments = (id) =>{
    const updateAppointments = appointments.filter(cita => cita.id !== id);
    saveAppointments(updateAppointments);
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              setAppointments={setAppointments}
            />
          </div>

          <div className='one-half column'>
            <h2>Administrador de citas</h2>
            {appointments.map(cita => (
              <Cita
                cita={cita}
                key={cita.id}
                deleteAppointments={deleteAppointments}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
