import { useState } from "react"

export default function MovieWebsite() {
    
    const [text, setText] = useState()
    const[movies, setMovies] = useState([])
   
    // Api key 514b3548

function getMoviesHandler(e){
    e.preventDefault();
if(text.length)

    fetch("http://www.omdbapi.com/?apikey=117fedef&s=" + text)
    .then(res => res.json())
    .then(data=> setMovies(data.search))
    .catch(error=> console.log (error))

}

   return <div className="w-100 py-5 " style={{ backgroundColor: "black", height: "100%", position: "absolute" }}>
        <h1 className="text-center text-uppercase text-white">Movie Flix</h1>
        <form onSubmit={getMoviesHandler} className=" todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-danger">
            {/* 2. Add an OnChange event to the input */}
            <input onChange={e=> setText(e.target.value)}placeholder="Enter Task Description" type="text" className="fs-5 p-3 rounded" />
            {/* 3.Add an onClick to the button */}
            <button className="btn btn-outline-danger p-3 fs-5">Search</button>
        </form>

        <div className="d-flex flex-wrap justify-content-center px-1">
            {movies.map(x => {
           <div  key={x.imdbID}classname="card" style={{width: '18rem'}}>
  <img src={x.Poster} className="card-img-top" alt="..." />
  <div classname="card-body">
    <h5 classname="card-title">{x.Title}</h5>
    <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" classname="btn btn-danger ">Go somewhere</a>
  </div>
</div>})}


        </div>

        </div>






}