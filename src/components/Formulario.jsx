import { useState } from 'react';

function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <div style={{
            margin: '20px 5px'
        }}>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input onChange={handleNameChange} id="name" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmailChange} id="email" type="text" />
                </div>
                <button >Registrarse</button>
            </form>

            <div style={{
                margin: '20px 5px'
            }}>
                {
                    submitted
                        ? <div>
                            <h2>Datos personales</h2>
                            <p>Nombre: {name}</p>
                            <p>Email: {email}</p>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Formulario;