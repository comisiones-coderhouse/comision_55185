import Item from "./Item"

function ItemList(props) {

    return (
        <section className="flex flex-col gap-8">
            {props.productos.map(producto => {
                return <Item key={producto.id} producto={producto} />
            })}
        </section>
    )
}
export default ItemList