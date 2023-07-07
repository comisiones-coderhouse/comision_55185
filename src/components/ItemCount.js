import { useState } from "react"

function ItemCount(props) {

    const [count, setCount] = useState(0)

    const handleSumar = () => {
        setCount(count + 1)
    }

    const handleRestar = () => {
        setCount(count - 1)
    }

    const handleConfirmar = () => {
        //alert(`se agregaron ${count} productos al carrito`)
        props.onAdd()
    }

    return (
        <div>
            <p>Contador : {count}</p>
            <button onClick={handleSumar}>+</button>
            <button onClick={handleConfirmar}>confirmar cantidad</button>
            <button onClick={handleRestar}>-</button>
        </div>
    )
}

export default ItemCount