import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../miContexto"

function CartWidget() {

  const valor = useContext(contexto)

  return (
    <NavLink to="/carrito">
      <span className="material-icons">shopping_cart</span>
      <span className="badge">{valor.cantidadTotal}</span>
    </NavLink>
  )
}
export default CartWidget