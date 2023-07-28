import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-blue-300">
      <h1>Brand Title</h1>
      <nav className="flex gap-4 text-xs">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/productos">productos</NavLink>
        <NavLink to="/categoria/clothing">pantalones</NavLink>
        <NavLink to="/categoria/electronics">remeras</NavLink>
        <CartWidget />
      </nav>
    </header>
  )
}

export default NavBar