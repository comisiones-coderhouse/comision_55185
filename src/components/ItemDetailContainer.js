import { useEffect } from "react"
import { traerProductoPorId } from "../utils"
import ItemCount from "./ItemCount"

function ItemDetailContainer() {

    useEffect(()=>{
        traerProductoPorId("MnQ9m21sbBkFQ4fwnHLb")
            .then((resultado)=>{
                console.log(resultado)
            })
            .catch((error)=>{
                console.log(error)
            })
    },[])

    return (
        <div>
            <img src="https://picsum.photos/200/300" alt="random image" />
            <h2>Nombre del producto -  $1000</h2>
            <p>Descripcion del producto</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi omnis, ipsa quidem expedita placeat quam a quod minus debitis soluta doloribus quia recusandae aut eos impedit! Cum, et fuga! Omnis doloremque facilis laborum dolores eligendi animi voluptatibus tempora, ea, reprehenderit deleniti, ullam voluptatem expedita vel hic! Nemo, odit ratione?</p>
            <ItemCount/>
        </div>
    )
}

export default ItemDetailContainer