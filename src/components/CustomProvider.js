import { createContext, useState } from "react"

export const cartContext = createContext()
const CartProvider = cartContext.Provider



function CustomProvider(props) {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])


    const agregarAlCarrito = (nuevaCant,nuevoItem) => {
        
        //nuevoItem == {id: 1, nombre: "Producto 1", precio: 100, imagen: "https://picsum.photos/200/300"}
        //nuevaCant == 3

        //cantidad = nuevoValor  //NOOO NOOO NOOOO Mala Practica, le estoy asignando un valor a un estado

        //Estados de Array / Objetos : 
        //1) No se pueden modificar directamente
        //2) Siempre se debe crear una copia completa

        //const copia = carrito //NOOO sigue siendo el mismo array
        //const copia = JSON.parse(JSON.stringify(carrito)) //NOOO 
        //const copia = carrito.map((item) => {}) //NOOO Tarda mucho
        
        //const copia = [...carrito]
        const copia = carrito.slice(0)

        //antes de guardar el producto que viene al carrito hay que revisar : 
        //si el producto ya existe, no se puede duplicar, o bien se actualiza la cantidad
        //si el producto no existe, se agrega al carrito

        copia.push({id: 1, nombre: "Producto 1", precio: 100, imagen: "https://picsum.photos/200/300" , cantidad : 3})
        setCarrito(copia)

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