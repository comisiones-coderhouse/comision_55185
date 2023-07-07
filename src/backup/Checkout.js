import { useRef, useState } from "react"

function Checkout() {

    /* 1er seccion */
    const nombreRef = useRef(null) // ref = {current: null}
    const apellidoRef = useRef(null) // ref = {current: null}
    const [valorNombre, setValorNombre] = useState('') // [valor, funcionQueModificaElValor


    /* 2da seccion */
    function handleClick() {
        //console.log(nombreRef.current.value)
        //console.log(apellidoRef.current.value)
        console.log(valorNombre)
    }

    function handleChange(evt) {
        setValorNombre(evt.target.value)
    }


    /* 3er seccion */
    return (
        <div>
            <input onChange={handleChange} ref={nombreRef} id="nombre" type="text" className="border" placeholder="Ej : Horacio" />
            <input ref={apellidoRef} type="text" className="border" placeholder="Ej : Gutierrez" />
            <button onClick={handleClick}>mostrar en consola</button>
        </div>
    )
}

export default Checkout


/* const button = document.getElementById('button')
button.addEventListener('click', function (evt) {
    evt.preventDefault()
}) */