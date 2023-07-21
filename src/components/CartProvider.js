import { useState } from "react"
import { Provider } from "../miContexto"

function CartProvider(props) {

    const [carrito, setCarrito] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const agregarAlCarrito = (nuevaCant,nuevoItem) => {
        //setCarrito
        console.log(nuevaCant,nuevoItem)
        setCantidadTotal(nuevaCant)
    }

    const eliminarDelCarrito = (id) => {
        //setCarrito
    }

    const vaciarCarrito = () => {
        //setCarrito
    }

    const valorDelContexto = {
        carrito: carrito,
        valorTotal: 0,
        cantidadTotal: cantidadTotal,
        agregarAlCarrito: agregarAlCarrito,
        eliminarDelCarrito: eliminarDelCarrito,
        vaciarCarrito: vaciarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CartProvider