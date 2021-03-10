// Import React 
import React, {Fragment} from 'react';

// Import components
import Formulario from './components/Formulario';

// Import CSS 
import './index.css';


function App() {
  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario />
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
