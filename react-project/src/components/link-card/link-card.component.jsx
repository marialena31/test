import React from "react";
import { Link } from 'react-router-dom'
import { getBaseUrlMedia } from "../../utils /utils";

import './link-card.styles.scss'

const LinkCard = ({data, className = ''}) => {
    const getUrlMedia = (img, dir) => {
        return getBaseUrlMedia().concat('/',dir,'/','desktop','/',img)
    }
    return (
        <Link to={`/${data.link}`} className={`link-card__link ${className}`}>
            <div className={`link-card__link__box ${data.size} ${className}`} style={{backgroundImage: `url(${getUrlMedia(data.imageBackground, data.imgBckDir)})`}} >
                <h2 className={`link-card__link__box__title ${className}`}>{data.title}</h2>
                <div className={`link-card__link__box__subtitle ${className}`}>View Projects<span>&gt;</span></div>
            </div>
        </Link>
    )
}

export default LinkCard;