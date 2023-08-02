import Item from "./Item"

function ItemList(props) {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {props.productos.map(producto => {
                return <Item key={producto.id} producto={producto} />
            })}
        </section>
    )
}
export default ItemList