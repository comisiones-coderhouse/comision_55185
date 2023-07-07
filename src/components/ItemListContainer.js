import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

function ItemListContainer(props) {

    let productos = [{ id: 1, nombre: "Producto 1" }, { id: 2, nombre: "Producto 2" }]

    const onAdd = () => { 
        console.log("Soy on Add!")
    }

    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer