import Item from "./Item"

function ItemList(props) {

    return (
        <div>{props.productos.map((producto)=>{
            return <Item/>
        })}</div>
    )
}
export default ItemList