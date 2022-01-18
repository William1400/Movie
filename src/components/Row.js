import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Row.scss";

export default function Row({title, fetchUrl}) {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
        }
    
        fetchData();

    }, [fetchUrl]);

    console.log(movies);

    return (

        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__images">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt="{movie?.title || movie?.name || movie?.original_title}" 
                            className="row__image">
                        </img>
                    </div>
                ))}
                
            </div>
        </div>
    )
}
