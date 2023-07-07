import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-blue-300">
        <h1>Brand Title</h1>
        <nav>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            <CartWidget/>
        </nav>
    </header>
  )
}

export default NavBar