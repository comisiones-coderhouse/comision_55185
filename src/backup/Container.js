import { useEffect, useState } from "react"

function Container() {

    const [contador, setContador] = useState(0)
    const [productos] = useState([])

    useEffect(function () {

        const test = function () {
            console.log('hola')
        }

        document.body.addEventListener('click', test)

        return () => {
            console.log("Desmontando el componente")
            document.body.removeEventListener('click', test)
        }

    }, [])
    

    const handleSumar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <p>{contador}</p>
            <button onClick={handleSumar}>click</button>
            {productos.map((producto) => {
                return <p key={producto.id}>{producto.title}</p>
            })}
        </div>
    )
}

export default Container