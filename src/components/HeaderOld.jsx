import Button from './Button.jsx';

import '../styles/Header.css'

function Header() {

    const isActive = true;

    function handleButtonClick(nombre) {
        alert('Click en el boton: ' + nombre);
    }

    return (
        <header className='header-container'>
            <Button tarea={handleButtonClick} label={'Inicio'} activo={isActive}/>
            <Button tarea={handleButtonClick} label={'Blog'}/>
            <Button tarea={handleButtonClick} label={'Contacto'}/>
        </header>
    )
}

export default Header;