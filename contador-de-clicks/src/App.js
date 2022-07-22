
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoContador from './imagenes/logo-contador.jpg';
import { useState } from 'react';

function App() {
  
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks +1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' 
        src={logoContador}
        alt='logo' 
        height={100} />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClicks={numClicks} />

        <Boton 
        texto="click"
        esBotonDeClick={true}
        manejarClick={manejarClick} />

        <Boton
        esBotonDeClick={false}
        manejarClick={reiniciarContador}
        texto='reiniciar' />

      </div>
    </div>
  );
}

export default App;
