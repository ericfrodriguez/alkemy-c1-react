
// import TodoList from './components/TodoList.jsx';
import Contador from './components/Contador.jsx';
import { useState } from 'react';

import './App.css'
import Saludo from './components/Saludo.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Formulario from './components/Formulario.jsx';

function App() {
  const [mostrar, setMostrar] = useState(true);
  // <Saludo>Hola</Saludo> Componentes contenedores
  // <Saludo /> Componentes elementos

  return (
    <div>
      <Header />
      <Saludo />
      <div style={{
        margin: '20px 5px'
      }}>
        {
          mostrar && <Contador />
        }

        <div>
          <button onClick={() => setMostrar(true)}>Montar</button>
          <button onClick={() => setMostrar(false)}>Desmontar</button>
        </div>
      </div>
      <Footer texto={'Contenido footer por Props'} />
      <Footer texto={'Otro footer'} />
      {/* <Formulario /> */}
      {/* <TodoList /> */}
    </div>
  )
}

export default App

// function useState(valorInicial) {
//   const estadoActual = valorInicial;

//   function cambiarEstadoActual(nuevoEstado) {
//     estadoActual = nuevoEstado;
//   }

//   return [estadoActual, cambiarEstadoActual];
// }

// const [productos, setProductos] = useState([]);