// Import React 
import React, {Fragment , useState , useEffect} from 'react';

// Import components
import Formulario from './components/Formulario';
import Cita from './components/Cita';

// Import CSS 
import './index.css';


function App() {

  // Evalue if exist appointments in localStorage
  let initialAppointments = JSON.parse(localStorage.getItem('citas'));
  if(!initialAppointments){
    initialAppointments = [];
  }

  // State citas
  const [appointments , saveAppointments] = useState(initialAppointments);

  // Use effect to detect appointments change's
  useEffect(() =>{
    initialAppointments ? localStorage.setItem('citas' , JSON.stringify(appointments)) : localStorage.setItem('citas' , JSON.stringify([]));

  } , [appointments , initialAppointments]);

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

  // Set title using ternary conditional
  const titulo = appointments.length === 0 ? 'No tiene citas' : 'Administrar citas';

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
            <h2>{titulo}</h2>
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
