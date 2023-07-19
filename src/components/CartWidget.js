import { NavLink } from "react-router-dom"
import { contexto } from "./miContexto"
import { useContext } from "react"

function CartWidget() {

  const valorActualDelContexto = useContext(contexto)

  return (
    <NavLink to="/carrito">
      <span className="material-icons">shopping_cart</span>
      <span className="badge">{valorActualDelContexto.cantidadTotal}</span>
    </NavLink>
  )
}
export default CartWidget