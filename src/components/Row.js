import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Row.scss";

export default function Row({title, fetchUrl, isPoster}) {
    
    const url = "https://image.tmdb.org/t/p/original/";
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
                        {isPoster ? (
                            <img 
                                src={`${url}/${movie.poster_path}`}
                                alt="{movie?.title || movie?.name || movie?.original_title}" 
                                className="row__image">
                            </img>
                        ) : (
                              <img 
                              src={`${url}/${movie.backdrop_path}`}
                              alt="{movie?.title || movie?.name || movie?.original_title}" 
                              className="row__image">
                          </img>
                        )}
                    </div>
                ))}
                
            </div>
        </div>
    )
}
