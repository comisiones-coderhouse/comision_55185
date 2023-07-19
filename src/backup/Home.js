function Home() {

    const handleClick = (e) => {
        //console.log(e.target)
        //console.log(e.pageX)
        console.log("click")
    }

    const handleChange = (e) => {
        //console.log(e.target)
        //console.log(e.key)
        console.log("change")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
    }

    const handleClickTwo = (e) => {
        e.preventDefault()
        console.log("click two")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border" type="text" onKeyDown={handleChange} />
                <input className="border" type="text" onKeyDown={handleChange} />
                <button className="border" onClick={handleClick}>click</button>
            </form>
            <button onClick={handleClickTwo}>click</button>
            <a href="https://google.com" onClick={handleClickTwo}>ir a google</a>
        </div>
    )
}

export default Home