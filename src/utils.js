import { db } from "./firebaseConfig"
import { 
    collection, 
    getDocs , 
    query , 
    where , 
    getDoc,
    doc,
    addDoc
} from "firebase/firestore"


export async function traerProductos() {
    
    const productosCollection = collection(db, "productos")
    const resultado = await getDocs(productosCollection)
    const productos = resultado.docs.map(doc => {
        const producto = doc.data()
        producto.id = doc.id
        return producto
    })
    return productos
}

export async function traerProductosPorCategoria(categoria) {

    const productosCollection = collection(db, "productos")

    const consultaConFiltro = query(productosCollection,where("category","==",categoria))
    const resultado = await getDocs(consultaConFiltro)
    const productos = resultado.docs.map(doc => {
        const producto = doc.data()
        producto.id = doc.id
        return producto
    })

    return productos
}

export async function traerProductoPorId(id) {
    const productosCollection = collection(db, "productos")
    const productoDoc = doc(productosCollection, id)
    const resultado = await getDoc(productoDoc)
    const producto = resultado.data()
    producto.id = resultado.id
    return producto
}

export async function guardarOrden(data) {
    const ordenesCollection = collection(db, "ordenes")
    const resultado = await addDoc(ordenesCollection, data)
    return resultado
}