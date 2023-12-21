
// import TodoList from './components/TodoList.jsx';
import Contador from './components/Contador.jsx';
import { useState } from 'react';

import './App.css'
import Saludo from './components/Saludo.jsx';
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import Formulario from './components/Formulario.jsx';
import UserProvider from './context/UserProvider.jsx'; // Contexto
import MyAppBar from './components/MyAppBar.jsx';


function App() {
  const [mostrar, setMostrar] = useState(true);
  // <Saludo>Hola</Saludo> Componentes contenedores
  // <Saludo /> Componentes elementos
  const border = 50;

  return (
    <UserProvider>
      <MyAppBar />
      {/* <Saludo /> */}
      <div style={{
        margin: '20px 5px',
        backgroundColor: "red",
        borderRadius: `${border}px`
      }}>
        {
          mostrar ? <Contador valorInicial={10}/> : <p>Contador oculto</p>
        }
        <div>
          <button onClick={() => setMostrar(true)}>Montar</button>
          <button onClick={() => setMostrar(false)}>Desmontar</button>
        </div>

      </div>
      <Footer />
      {/* <Footer texto={`Contenido ${border} "footer" por Props`} /> */}
      {/* <Formulario /> */}
      {/* <TodoList /> */}
    </UserProvider>
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