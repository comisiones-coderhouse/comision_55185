import { useState } from "react"
import Hijo from "./Hijo"

function Home() {

  const [nombre,setNombre] = useState("horacio")

  const handleClick = (nuevoNombre) => {
    setNombre(nuevoNombre)
  }

  return (
    <div>
      <h2>Home</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium veritatis ex fuga ipsum, sed optio!</p>
      <Hijo 
        nombre={nombre} 
        onAdd={handleClick} />
    </div>
  )
}

export default Home