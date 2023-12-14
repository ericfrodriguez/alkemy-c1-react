import { useState, useEffect } from 'react';

import Button from './Button';

function Contador() {
    const [contador, setContador] = useState(0); // Estado local
    const [contador2, setContador2] = useState(0); // Estado local

    const incrementar = () => {
        setContador(contador + 1);
    } // Hace el cambio a 1

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    } // Hace el cambio a 1

    useEffect(() => {
        console.log('Obtencion de informacion de API');

        return () => {
            console.log('Se DESMONTÓ el componente');
        }
        
    }, [contador2, contador])

    //* Solo con la funcion. Se ejecuta el efecto cuando se monta el componente y cuando se actualiza
    //* Con la funcion y el array VACIO. Se ejecuta el efecto cuando se monta el componete SOLO POR PRIMERA VEZ
    //* Con la funcion y el array con data. Se ejecuta el efecto cuando se monta el componente SOLO POR PRIMERA VEZ y cuando cambian las variables dentro del array
    //* Con la funcion de limpieza (clean up). Se ejecuta el codigo cuando se DESMONTA el componente

    return (
        <>
            <p>Contador: {contador}</p>
            <p>Contador 2: {contador2}</p>
            <Button
                label='Contador'
                tarea={incrementar}
            />
            <Button
                label='Contador 2'
                tarea={incrementar2}
            />
        </>
    )
}

export default Contador;