import React, { useState, useEffect} from "react";
import "./body.scss"
import axios from "axios";
import Header from "../header/Header";

const Body = () => {
    const APIKEY = "4d2868699f6ab95203d92eab296afa21";
    // put key in env

    const [movie, setMovie] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleOnChange = event => {
        setUserInput(event.target.value);
        console.log(userInput)
    };

    const callSearch = (e) => {
        e.preventDefault()
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${APIKEY}&language=en-US&page=1&include_adult=false`)
            .then(function (res) {
                setMovie(res.data.results)
                console.log(movie);

            }).catch(err=>console.log(err.response.data))
        console.log(userInput)
    };

    console.log(movie);

    return (
        <div className="container">
           <p>Movie:&nbsp;<input type="search" onChange={handleOnChange}/>
            <button type="submit" onClick={callSearch}>Search</button>
           </p>

            <ul>
                {
                    movie.map((film)=>(

                        <div>
                            <h4>{film.title}</h4>
                            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}/>
                            <p>{film.overview}</p>
                        </div>


                    ))}
            </ul>

        </div>
    )

};

export default Body;


/*

<div>
                            <h4>{film.title}</h4>
                            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}/>
                            <p>{film.overview}</p>
                        </div>

<p>
             Search:&nbsp;<input type="text" name="title"
                                    onChange={event => setUserInput(event.target.value)}/>
                <button onClick={handleOnClick}>Search</button>
            </p>
*/


/* let movies = axios.get("https://api.themoviedb.org/3/search/movie?" +
        "query=potter&api_key=4d2868699f6ab95203d92eab296afa21&language=" +
        "en-US&page=1&include_adult=false")
        .then(
            console.log(movies)
        )*/

/* let movies = axios.get("https://api.themoviedb.org/3/search/movie?" +
        "query=potter&api_key=4d2868699f6ab95203d92eab296afa21&language=" +
        "en-US&page=1&include_adult=false")
        .then(
            console.log(movies)
        )*/