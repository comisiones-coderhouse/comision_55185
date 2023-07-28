import { createContext, useState } from "react"

export const cartContext = createContext()
const CartProvider = cartContext.Provider



function CustomProvider(props) {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])

    return (
        <CartProvider value={{cantidad : cantidad , setCantidad : setCantidad}}>
            {props.children}
        </CartProvider>
    )

}

export default CustomProvider