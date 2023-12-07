
function Saludo() {
    const nombre = 'John Doe';
    const isActive = true;

    const estilo = {
        color: isActive ? 'green' : 'red',
        fontSize: isActive ? '36px' : '16px',
        fontWeight: isActive ? 'bold' : '400'
    }
    return (
        <div>
            <img />
            <h1 style={estilo} className={isActive ? 'bg-blue' : 'bg-red'}>Bienvenido, {nombre}!</h1>
            <p>Esta es una aplicación de ejemplo en React.</p>
            <p>Esto funciona</p>
            <div />
            <span />
        </div>
    )
}

export default Saludo;