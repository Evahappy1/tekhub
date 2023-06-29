import { useState } from "react"
import Swal from "sweetalert2";

export default function MovieWebsite() {

    const [text, setText] = useState()
    const [movies, setMovies] = useState([])

    // Api key 514b3548

    function getMoviesHandler(e) {
        e.preventDefault();
        if (text.length < 3) {
            Swal.fire('')
        }

        fetch("http://www.omdbapi.com/?apikey=117fedef&s=" + text)
            .then(res => res.json(e))
            .then(data => setMovies(data.search))
            .catch(error => console.log("error" + error))

    }

    return (<div style={{ backgroundColor: "black", color: "white" }}>
            <h1 className="js-flix">Movie Flix</h1>

            <form onSubmit={getMoviesHandler} style={{ backgroundColor: "black", color: "white" }}>
                <input onChange={e => setText(e.target.value)} className="js-input-flix fs-1" placeholder="Search your favorite movies" type="text" />
                <button className="js-button-flix btn btn-danger">Search</button>

            </form>
            <div className="bg-dark"></div>

            <div>
                <h3 className="m-5 text-center">MOVIE GALLERY</h3>
                <section className="d-flex flex-wrap justify-content-center px-1">

                    {movies.map(x => {
                        return <div key={x.imdbID} classname="card" style={{ width: '18rem' }}>
                            <img src={x.Poster} className="card-img-top" alt="..."/>
                            <div classname="card-body">

                                <h5 classname="card-title">{x.Title}</h5>

                                <p classname="card-text">{x.Year} {x.Type}</p>

                                <a href="#" classname="btn btn-danger w-100">see details</a>
                            </div>
                        </div>

                    })}










                </section>

            </div>

        </div>
    );
}