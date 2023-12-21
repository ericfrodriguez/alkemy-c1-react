import './App.css'
import Footer from './components/Footer.jsx';
import UserProvider from './context/UserProvider.jsx'; // Contexto
import MyAppBar from './components/MyAppBar.jsx';
import ListaProductos from './components/ListaProductos.jsx';

function App() {
  return (
    <UserProvider>
      <MyAppBar />

      <ListaProductos />

      <Footer />
    </UserProvider>
  )
}

export default App
