import { useContext, useState } from "react"
import { contexto } from "../../miContexto"

function Productos() {

  const [contador,setContador] = useState(0)
  const valor = useContext(contexto)

  const handleSumar = () => {
    setContador(contador + 1)
  }

  return (
    <div>
      <h2>Productos</h2>
      <p>Contador: {contador}</p>
      <button onClick={handleSumar}>Sumar</button>
      {/* <button onClick={valor.agregarAlCarrito()}>agregar al carrito</button> */}
      {/* <button onClick={valor.agregarAlCarrito}>agregar al carrito</button> */}
      <button onClick={() => { valor.agregarAlCarrito(contador,{prod:"Pantalon",precio:100}) }}>agregar al carrito</button>
    </div>
  )
}
export default Productos