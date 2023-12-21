import { Box } from "@mui/material" // Equivalente a div
import Producto from "./Producto";
import axios from "axios";
import { useEffect, useState } from "react";

function ListaProductos() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        // Efecto secundario: Peticion API
        console.log('Pedido de info');
        obtenerProductos();
        
    }, [])

    const obtenerProductos = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((respuesta) => setProductos(respuesta.data)) // Para el caso de exito
            .catch((error) => console.log(error)) // Para el caso de error
    }

    return (
        <Box
            sx={{
                p: 2
            }}
        >

            {
                productos.map((producto) => (
                    <Producto
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        price={producto.price}
                        image={producto.image}
                    />
                ))
            }
        </Box>
    )
}
export default ListaProductos