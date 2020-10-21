import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
// Importar Componentes

import MiComponente from './component/MiComponente';

function HelloWorld (name,edad){
  var presentacion=
    <div>
      <h2>Hola, soy {name}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  return presentacion;
}

function App() {
  var name="Raul Cardozo";
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola!!!! Bienvenido Raul!!!
        </p>
        {HelloWorld(name,45)}
        <section className="componentes">
            <MiComponente/>
        
        </section>  
      </header>
      
    </div>
  );
}

export default App;
