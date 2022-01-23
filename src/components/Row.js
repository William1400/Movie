import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Row.scss";
import QuickView from './QuickView';

export default function Row({ title, fetchUrl, isPoster }) {

    const url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);
    const [popup, setPopup] = useState(false);
    const [movie, setMovie] = useState([]);

    function handleClickPopup() {

        popup ? setPopup(false) : setPopup(true);
    }

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);
            setMovie(request.data.results);
        }

        fetchData();

    }, [fetchUrl]);

    const bannerStyle = {

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }

    return (

        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__images">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        {isPoster ? (
                            <img
                                onClick={handleClickPopup}
                                src={`${url}/${movie.poster_path}`}
                                alt="{movie?.title || movie?.name || movie?.original_title}"
                                className="row__image">
                            </img>
                        ) : (
                            <img
                                onClick={handleClickPopup}
                                src={`${url}/${movie.backdrop_path}`}
                                alt="{movie?.title || movie?.name || movie?.original_title}"
                                className="row__image">
                            </img>
                        )}
                    </div>
                ))}

            </div>
            <QuickView
                bannerStyle={bannerStyle} 
                movie={movie}
                popup={handleClickPopup}
                popupStatut={popup}
            />
        </div>
    )
}
