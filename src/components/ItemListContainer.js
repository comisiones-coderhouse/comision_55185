import { useEffect, useState } from "react"
import productosJson from "../productos.json"
import Loader from "./Loader"
import ItemList from "./ItemList"


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setProductos(productosJson)
            setLoading(false)
        }, 5000)
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