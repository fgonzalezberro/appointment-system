// Import React 
import React, {Fragment , useState} from 'react';

// Import components
import Formulario from './components/Formulario';

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

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              setAppointments={setAppointments}
            />
          </div>

          <div className='one-half column'>
            2
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
