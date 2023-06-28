import { useState } from 'react'


function Contador (props) {
  
  /* 1er seccion : ESTADOS (guardan valores que se ven en actualizados en la vista) */
  let [contador, setContador] = useState(0) 


  /* 2da seccion : ACCIONES (modifican estados para cambiar la vista) */
  function handleSumar(){ 
    if (contador < props.stock){
      setContador(contador + 1) 
    }
  }

  function handleRestar() { 
    if( contador > 0 ){
      setContador(contador - 1) 
    }
  }

  function handleLimpiar(){ 
    setContador(0) 
  }

  
  /* 3ra seccion : VISTA */
  return (
    <div className='border'>
      <h3>Contador</h3>
      <p>{contador}</p>
      <button onClick={handleSumar} className='border'>sumar</button>
      <button onClick={handleRestar} className='border'>restar</button>
      <button onClick={handleLimpiar} className='border'>limpiar</button>
    </div>
  )
}
export default Contador
