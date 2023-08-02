import { serverTimestamp } from "firebase/firestore"
import { guardarOrden } from "../utils"
import { useState } from "react"

const productosDelCarrito = [
    { id : 1 , cantidad : 2 , precio : 1000 , nombre : "Producto 1"} , 
    { id : 2 , cantidad : 1 , precio : 2000 , nombre : "Producto 2"} ,
]

            
function Carrito() {

    const [ticket, setTicket] = useState("")

    const handleClick = () => {
        let ordenDeCompra = {
            productos : productosDelCarrito,
            usuario : {
                nombre : "pepe" ,
                email : "pepe@pepe.com",
                telefono : "123456789"
            },
            fecha : serverTimestamp()
        }

        guardarOrden(ordenDeCompra)
            .then(resultado => {
                setTicket(resultado.id)
            })
            .catch(error => {
                console.log(error)
            })
    }

    if(ticket) {
        return (
            <p>Felicitaciones! Su compra es {ticket}</p>
        )
    }

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {productosDelCarrito.map((producto) => {
                    return (
                        <li key={producto.id}>
                            <p>{producto.nombre}</p>
                            Cant : x{producto.cantidad} - ${producto.precio}
                        </li>
                    )
                })}
            </ul>
            <div>
                <input type="text" className="border my-2 w-full" />
            </div>
            <div>
                <input type="text" className="border my-2 w-full" />
            </div>
            <div>
                <input type="text" className="border my-2 w-full" />
            </div>
            <div className="flex gap-8">
                <button className="p-2 bg-red-300 rounded shadow-xl" onClick={handleClick} >variar carrito</button>
                <button className="p-2 bg-green-300 rounded shadow-xl" onClick={handleClick} >comprar</button>
            </div>
        </div>
    )
}

export default Carrito