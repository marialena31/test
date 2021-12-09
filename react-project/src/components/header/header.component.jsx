import React from "react";
import { Link } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo-dark.png'

import Navigation from "../navigation/navigation.component";

import './header.styles.scss'

const Header = () => {
    return (
        <header className="header">
            <Link className="header__logo" to='/'>
                <img src={Logo} className="header__logo__img" alt="logo"/>
            </Link>
            <Navigation />
        </header>
    )
}

export default Header;