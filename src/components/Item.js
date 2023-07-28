import { useContext, useState } from "react"
import { cartContext } from "./CustomProvider"
import { Link } from "react-router-dom"

function Item(props) {

  const valorDelContexto = useContext(cartContext)

  return (
    <div>
      <h2>{props.producto.title}  -   ${props.producto.price}</h2>
      <p>Cantidad : {valorDelContexto.cantidad}</p>
      <button onClick={()=>valorDelContexto.setCantidad(valorDelContexto.cantidad + 1)}>sumar</button>
      <Link className="bg-blue-300 p-2 rounded-md block" to="/detalle/:id">ver detalle</Link>
    </div>
  )
}
export default Item