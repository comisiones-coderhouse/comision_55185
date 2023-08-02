import { serverTimestamp } from "firebase/firestore"
import { guardarOrden } from "../utils"
import { useState } from "react"

function Carrito() {

    const [ticket, setTicket] = useState("")

    const handleClick = () => {
        let ordenDeCompra = {
            productos : [
                { id : 1 , cantidad : 2 , precio : 1000} , 
                { id : 2 , cantidad : 1 , precio : 2000}
            ],
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
            <div className="flex gap-8">
                <button className="p-2 bg-red-300 rounded shadow-xl" onClick={handleClick} >variar carrito</button>
                <button className="p-2 bg-green-300 rounded shadow-xl" onClick={handleClick} >comprar</button>
            </div>
        </div>
    )
}

export default Carrito