import React, {useState, useEffect} from 'react';
import "../styles/Banner.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import requests from "./data/Requests";
import axios from 'axios';
import QuickView from './QuickView';

export default function Banner() {

    const [movie, setMovie] = useState([]);
    const [popup, setPopup] = useState(false);

    function handleClickPopup() {

        popup ? setPopup(false) : setPopup(true);
    }

    useEffect(() => {

        async function fetchData() {

            const request = await axios.get(requests.fetchTrending);

            setMovie(
               
                request.data.results[

                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
    
        fetchData();

    }, []);

    function truncateText(string, n) {

        return string?.length > n
        ? string.substr(0, n - 1) + "..." : "No description";
    }

    const bannerStyle = {

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }

    console.log(popup);

    return (
        <header className="banner" style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_title}
                </h1>
                <p className="banner__description">
                    {truncateText(movie?.overview, 100)} 
                </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play">
                        <PlayArrowIcon/> Lecture
                    </button>
                    <button className="banner__button" onClick={handleClickPopup} >
                        <InfoIcon/>Info
                    </button>
                </div>
            </div>
            <QuickView 
                bannerStyle={bannerStyle} 
                movie={movie} 
                popup={handleClickPopup} 
                popupStatut={popup} 
            />
        </header>
    )
}

