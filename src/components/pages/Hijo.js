import { useState } from "react"

function Hijo(props) {
  const [contador,setContador] = useState(0)

  const handleClick = () => {
    props.onAdd("Carlos" + contador)
  }

  const handleSumar = () => {
    setContador(contador + 1)
  }

  return (
    <div>
      <h3>Hijo</h3>
      <h4>Contador: {contador}</h4>
      <button className="border" onClick={handleClick}>cambiar</button>
      <button onClick={handleSumar}>sumar</button>
      <p>{props.nombre}</p>
    </div>
  )
}
export default Hijo