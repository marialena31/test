import React from "react";
import { Link } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <nav className="nav">
            <Link className="nav__item" to='/about'>Our Company</Link>
            <Link className="nav__item" to='/locations'>Locations</Link>
            <Link className="nav__item" to='/contact'>Contact</Link>
        </nav>
    )
}

export default Navigation;