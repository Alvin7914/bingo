import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {


    return (
<header className="header">
    <Link to='/'><img src='src/assets/leaf3.png' alt='Leaf' className="leaf-image"/></Link>
    <nav className="header__nav">
        <ul className="header__nav__list">
            <li className="header__nav__list-element"><Link to="/new">Nowe bingo</Link></li>
            <li className="header__nav__list-element"><Link to="/saved">Zapisane bingo</Link></li>
        </ul>
    </nav>
</header>
    )
}

export default TopBar;