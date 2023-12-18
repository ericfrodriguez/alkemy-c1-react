import { useState, useContext } from 'react';
import UserContext from "../context/UserContext.jsx";

function Formulario() {

    const { setUser } = useContext(UserContext);
    // console.log('Formulario: ', setUser);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        setUser({
            name,
            image
        });

        // setUser({
        //     name: name,
        //     image: image
        // });
    }

    return (
        <div style={{
            margin: '20px 5px'
        }}>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input onChange={handleNameChange} id="name" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input onChange={handleEmailChange} id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="image">Imagen: </label>
                    <input onChange={handleImageChange} id="image" type="text" />
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