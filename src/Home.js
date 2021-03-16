const Home = () => {

    const handlerClick = (e) => {
        console.log(1212, e)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handlerClick}>click me</button>
            <button onClick={(e) => handleClickAgain('yasha', e)}>click me again</button>
        </div>
    )
}

export default Home
