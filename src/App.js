import React from 'react';
import logo from './assets/images/logo.svg';
import image2 from './assets/images/news4.jpg';
import './assets/css/App.css';
// Importar Componentes

import MiComponente from './component/MiComponente';

function HelloWorld (name,edad,est_civil,año){
  var presentacion=(
    <div>
      <h2>Hola, soy {name}</h2>
      <h3>Tengo {edad} años</h3>
      <h4> soy {est_civil} todavia</h4>
      <h4> naci en {año}</h4>
    </div>
    );
  return presentacion;
}

function App() {
  var name="Raul Oscar Cardozo";
  var est_civil="soltero";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={image2}  className="App-images" alt="imagen" />
        <p>
          Hola, Bienvenido Raul Cardozo!!!
        </p>
        {HelloWorld(name,45, est_civil,1963)}
        {/* {
          alert("Argentina, Chaco, Resistencia")
        }  
        {
           alert("Boludeando en react")
        } */}
          <section className="componentes">
            <MiComponente/>
        
          </section>  
      </header>
      
    </div>
  );
}

export default App;
