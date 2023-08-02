import { useEffect, useState } from "react"
import { traerProductoPorId } from "../utils"
import ItemCount from "./ItemCount"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const params = useParams()

    useEffect(()=>{
        traerProductoPorId("MnQ9m21sbBkFQ4fwnHLb")
            .then((resultado)=>{
                //console.log(resultado)
            })
            .catch(()=>{
                toast.error("Error al traer el producto")
            })
    },[])

    return (
        <div>
            <img src="https://picsum.photos/200/300" alt="random image" />
            <h2>{producto.title}</h2>
            <p>Descripcion del producto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi omnis, ipsa quidem expedita placeat quam a quod minus debitis soluta doloribus quia recusandae aut eos impedit! Cum, et fuga! Omnis doloremque facilis laborum dolores eligendi animi voluptatibus tempora, ea, reprehenderit deleniti, ullam voluptatem expedita vel hic! Nemo, odit ratione?</p>
            <ItemCount/>
        </div>
    )
}

export default ItemDetailContainer