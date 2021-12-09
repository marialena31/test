import React from "react";
import Button from "../button/button.component";

import './button-on-dark.styles.scss'

const withOnDark = Element => props => <Element {...props} className='on-dark' />
const ButtonOnDark = withOnDark(Button)

export default ButtonOnDark;