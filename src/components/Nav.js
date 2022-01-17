import React, { useState } from 'react';
import "./Nav.scss";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Nav() {


    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = () => {

        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    };

    const handleClick = () => {

        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    };

    useState(() => {

        document.addEventListener("scroll", transitionNav);
    });

    return (

        <div className={

            `nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"}
            ${toggleMenu && "show"}`
            }
        >
            <button className="nav__burger" onClick={handleClick}>
                <MenuIcon />
            </button>
            <img className="nav__logo" alt="logo"></img>
            <nav className="nav__links">
                <a href="#" className="nav__link">Acceuil</a>
                <a href="#" className="nav__link">Serie</a>
                <a href="#" className="nav__link">Film</a>
            </nav>
            <div className="nav__actions">
                <a href="#" className="nav__action">
                    <SearchIcon />
                </a>
                <a href="#" className="nav__action">Direct</a>
                <a href="#" className="nav__action">
                    <RedeemIcon />
                </a>
                <a href="#" className="nav__action">
                    <NotificationsIcon />
                </a>
                <a href="#" className="nav__action"><img></img></a>

            </div>
        </div>
    )

}
