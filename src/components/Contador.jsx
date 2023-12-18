import { useState, useEffect, useRef } from 'react';

import Button from './Button';
import useForm from '../hooks/useForm';

function Contador({valorInicial = 0}) {

    const [contador, setContador] = useState(0); // Estado local
    const [contador2, setContador2] = useState(valorInicial); // Estado local

    const {value, setValue} = useForm();

    let cont = useRef(0); // Valor persistente a re-renderizaciones

    const parrafo = useRef(null);
    console.log(parrafo)

    const incrementar = () => {
        // setContador(contador + 1);
        cont.current++;
        // console.log(cont.current);
        console.log(parrafo.current.innerText);
        parrafo.current.innerText = 'Texto nuevo por referencia'
    } // Hace el cambio a 1

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    } // Hace el cambio a 1

    useEffect(() => {
        // console.log('Obtencion de informacion de API');
        // miFuncion();

        return () => {
            // console.log('Se DESMONTÓ el componente');
        }
        
    }, [contador2, contador])

    //* Solo con la funcion. Se ejecuta el efecto cuando se monta el componente y cuando se actualiza
    //* Con la funcion y el array VACIO. Se ejecuta el efecto cuando se monta el componete SOLO POR PRIMERA VEZ
    //* Con la funcion y el array con data. Se ejecuta el efecto cuando se monta el componente SOLO POR PRIMERA VEZ y cuando cambian las variables dentro del array
    //* Con la funcion de limpieza (clean up). Se ejecuta el codigo cuando se DESMONTA el componente

    console.log('re-renderizacion');

    return (
        <>
            <p ref={parrafo}>Contador: {cont.current}</p>
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