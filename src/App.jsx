
import './App.css'
import Saludo from './components/Saludo.jsx';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {

  // <Saludo>Hola</Saludo> Componentes contenedores
  // <Saludo /> Componentes elementos

  return (
    <div>
      <Header />
      <Saludo />
      <TodoList />
      <Footer />
    </div>
  )
}

export default App
