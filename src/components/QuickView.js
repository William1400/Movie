import React from 'react';
import "../styles/QuickView.scss";
import CancelIcon from '@material-ui/icons/Cancel';

export default function QuickView({bannerStyle, movie, popup, popupStatut}) {
  
    return (
    
        <div className={`quickView ${popupStatut && "open"}`}>
            <div className="quickView__banner" style={bannerStyle}>
                <div className="quickView__content">
                    <h3 className="quickView__title">{movie?.title || movie?.name || movie?.original_title}</h3>
                    <p>Overview:<br/>{(movie?.overview)}</p> 
                    <p>Language of production:  {(movie?.original_language)} </p>
                    <p>Popularity: {(movie?.popularity)}</p> 
                    <p>Number of votes: {(movie?.vote_count)}</p> 
                    <button className="quickView__close" onClick={popup}>
                        <CancelIcon fontSize="large"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

 
