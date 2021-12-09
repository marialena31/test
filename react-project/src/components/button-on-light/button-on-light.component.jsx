import React from "react";
import Button from "../button/button.component";

import './button-on-light.styles.scss'

const withOnLight = Element => props => <Element {...props} className='on-light' />
const ButtonOnLight = withOnLight(Button)

export default ButtonOnLight;