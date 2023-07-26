import { useEffect, useState } from "react"
import productosJson from "../productos.json"
import Loader from "./Loader"
import ItemList from "./ItemList"
import { db } from "../firebaseConfig"
import { collection, getDocs } from "firebase/firestore"




function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        //referencia de la coleccion "productos" de la db 
        const productosCollection = collection(db,"productos")
        
        //const consulta = fetch("/productos").then().catch()
        const consulta = getDocs(productosCollection)

        consulta
        .then((resultado) => {
            //console.log("Salio todo bien!")

            //console.log(resultado.docs) //array de objetos con una referencia a cada documento

            const productos = resultado.docs.map(doc=>{
                //console.log(doc.data())
                return doc.data()
            }) 

//            console.log(productos)
            setProductos(productos)
        })
        .catch((error) => {
            console.log("Algo salio mal!")
            console.log(error)
        })
        


        /* setTimeout(() => {
            setProductos(productosJson)
            setLoading(false)
        }, 5000) */
        //Si hardcodeo el pedido a la db aca mismo , entonces necesito la variable db de firebase.js aca
        //Si tengo una funcion como por ejemplo pedirProductos() en Ej.: utils.js, entonces necesito importar db en utils.js
    }, [])


    if (loading) {
        return (
            <Loader/>
        )
    } else {
        return (
            <ItemList productos={productos}/>
        )
    }
}

export default ItemListContainer