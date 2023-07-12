import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const productosIniciales = [
  {
    id: 1,
    nombre: 'Producto 1',
    categoria: 'remeras',
  }, 
  {
    id: 2,
    nombre: 'Producto 2',
    categoria: 'remeras',
  },
  {
    id: 3,
    nombre: 'Producto 3',
    categoria: 'pantalones',
  }
]


function Categorias() {

  const parametros = useParams()

  //console.log(parametros.id)
  /* let [productos,setProductos] = useState([])

  useEffect(()=>{
    //aca haria el pedido
    setTimeout(()=>{
      //Aca recibo los datos 
      //setProductos(productosIniciales) //resultado de la API
      console.log("La categoria es: ",parametros.id)
      console.log("Filtro los productos")
      
      const filtrados = productosIniciales.filter((item)=>{
        return item.categoria === parametros.id
      })
      console.log(filtrados)

    },2000)
  },[parametros.id]) */

  return (
    <div>Categorias : {parametros.id}</div>
  )
}

export default Categorias