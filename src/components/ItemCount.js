import { useContext, useState } from "react"
import { toast } from "react-toastify"
import { cartContext } from "./CustomProvider"

function ItemCount(props) {

    const [count, setCount] = useState(0)
    const valorDelContexto = useContext(cartContext)

    const handleSumar = () => {
        setCount(count + 1)
    }

    const handleRestar = () => {
        setCount(count - 1)
    }

    const handleConfirmar = () => {
        valorDelContexto.agregarAlCarrito(count)
        toast.info("Producto agregado al carrito")
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