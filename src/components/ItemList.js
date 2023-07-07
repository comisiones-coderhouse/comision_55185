import Item from "./Item"

function ItemList(props) {

    return (
        <section>
            {props.productos.map(producto => {
                return <Item key={producto.id} />
            })}
        </section>
    )
}
export default ItemList