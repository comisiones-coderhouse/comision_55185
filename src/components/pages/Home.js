import { Link } from "react-router-dom"

function Home() {

  return (
    <div>
      <h2>Home</h2>
      <p>Bienvenido a mi E-Comerce!</p>
      <Link to='/productos'>Vea nuestros productos!</Link>
    </div>
  )
}

export default Home