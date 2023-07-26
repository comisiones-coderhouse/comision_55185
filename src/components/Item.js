function Item(props) {
  return (
    <div>
      <h2>{props.producto.title}  -   ${props.producto.price}</h2>
    </div>
  )
}
export default Item