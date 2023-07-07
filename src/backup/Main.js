import { useEffect, useState } from "react"
import Container from "./Container"
import Contador from "./Contador"

function Main() {
  /* ESTADOS */
  let [contador, setcontador] = useState(0)//3
  let [logueado, setlogueado] = useState(false)//true

  /* EFECTOS ("espacio controlado" : Es decir, no recarga como las acciones o la vista) */
  useEffect(() => {
    console.log('Pidiendo productos con Fetch....')
  }, [])
  //useEffect(()=>{  }) : recarga siempre
  //useEffect(()=>{  },[]) : No recarga nunca, solo se hace una vez
  //useEffect(()=>{  },[a,b]) : recarga cuando a ó b cambian (a o b son cualquier variable)

  /* ACCIONES */
  const handleClick = () => {
    //console.log(contador)
    //contador = contador + 1
    setcontador(contador + 1)
    //console.log(contador)
  }
  const handleLogin = () => {
    //console.log(logueado)
    //logueado = true
    setlogueado(true)
    //console.log(logueado)
  }
  const handleProductos = () => {
    console.log('Pidiendo productos con Fetch....')
    //fetch()
  }

  /* VISTA */
  return (
    <main className='grow p-2'>
      {/* <h2>Soy el Home </h2>
      <p>Contador : {contador}</p>
      <p>{`${logueado}`}</p>
      
      <button onClick={handleLogin}>login</button>
      <button onClick={handleProductos}>pedir productos</button> */}
      <p>Contador en el Container : {contador}</p>
      <Contador contador={contador} />
      <button onClick={handleClick}>click</button>
    </main>
  )
}

export default Main
