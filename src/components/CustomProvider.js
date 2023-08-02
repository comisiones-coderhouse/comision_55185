import { createContext, useState } from "react"

export const cartContext = createContext()
const CartProvider = cartContext.Provider



function CustomProvider(props) {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])


    const agregarAlCarrito = (nuevaCant,nuevoItem) => {
        setCantidad(nuevaCant)
    }

    const eliminarDelCarrito = (id) => {
        console.log("Eliminar Del Carrito " + id)
    }

    const vaciarCarrito = () => {
        console.log("Vaciar Carrito")
    }

    const valorDelContexto = {
        carrito: carrito,
        valorTotal: 0,
        cantidad: cantidad,
        agregarAlCarrito: agregarAlCarrito,
        eliminarDelCarrito: eliminarDelCarrito,
        vaciarCarrito: vaciarCarrito
    }

    return (
        <CartProvider value={valorDelContexto}>
            {props.children}
        </CartProvider>
    )

}

export default CustomProvider