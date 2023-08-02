import { useContext, useState } from "react"
import { cartContext } from "./CustomProvider"
import { Link } from "react-router-dom"

function Item(props) {

  const valorDelContexto = useContext(cartContext)

  return (
    <div className="p-4 shadow-lg rounded hover:scale-110 transition duration-300">
      <h2>{props.producto.title}  -   ${props.producto.price}</h2>
      <p>Cantidad : {valorDelContexto.cantidad}</p>
      <button onClick={()=>valorDelContexto.setCantidad(valorDelContexto.cantidad + 1)}>sumar</button>
      <Link className="bg-blue-300 p-2 rounded-md block" to="/detalle/:id">ver detalle</Link>
    </div>
  )
}
export default Item