import React from "react";

import './button.styles.scss'

const Button = ({title, handleClick, className = ''}) => {
    return (
        <button className={`btn ${className}`} onClick={handleClick}>{title}</button>
    )
}
export default Button;