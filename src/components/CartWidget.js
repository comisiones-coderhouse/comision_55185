import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../miContexto"
import { cartContext } from "./CustomProvider"

function CartWidget() {

  //https://excalidraw.com/#json=XCVtCjoEf-4NzBbL3wxhL,HRko0e-HPfTuv6ZOVVcaoQ
  const valor = useContext(cartContext)

  return (
    <NavLink to="/carrito">
      <span className="material-icons">shopping_cart</span>
      <span className="badge">{valor.cantidad}</span>
    </NavLink>
  )
}
export default CartWidget