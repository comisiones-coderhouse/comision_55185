import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-blue-300">
      <h1>Brand Title</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/productos">productos</NavLink>
        <NavLink to="/categoria/pantalones">pantalones</NavLink>
        <NavLink to="/categoria/remeras">remeras</NavLink>
        <CartWidget />
      </nav>
    </header>
  )
}

export default NavBar