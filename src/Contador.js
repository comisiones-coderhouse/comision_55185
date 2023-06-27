import { useState } from 'react'

// Estados : Son variables reactivas que se pueden usar en cualquier parte del componente
function Contador () {
  // const saludo = 'Hola Mundo'
  // const [saludo, setSaludo] = useState('Hola Mundo')
  const [contador, setContador] = useState(0)

  return (
    <div>
      <h3>Contador</h3>
      {/* <p>{saludo}</p> */}
      <p>{contador}</p>
      <button onClick={() => {
        // saludo = 'Chau mundo'
        // setSaludo('Chau mundo')
        setContador(contador + 1)
      }}
      >click
      </button>
    </div>
  )
}
export default Contador
