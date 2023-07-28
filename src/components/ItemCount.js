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
        <div className="mt-4">
            <p>Contador : {count}</p>
            <div className="flex gap-4 mt-4">
                <button className="rounded p-2 bg-blue-300 shadow-xl" onClick={handleSumar}>+</button>
                <button className="rounded p-2 bg-blue-300 shadow-xl" onClick={handleConfirmar}>confirmar cantidad</button>
                <button className="rounded p-2 bg-blue-300 shadow-xl" onClick={handleRestar}>-</button>
            </div>
        </div>
    )
}

export default ItemCount