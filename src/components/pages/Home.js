import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer"

function Home() {

  return (
    <div>
      <h2 className="font-bold text-2xl">Home</h2>
      <p className="mb-8">Bienvenido a mi E-Comerce!</p>
      <ItemListContainer/>
    </div>
  )
}

export default Home