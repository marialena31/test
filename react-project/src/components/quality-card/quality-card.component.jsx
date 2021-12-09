import React from "react";
import { useHistory } from 'react-router-dom';

import { getBaseUrlMedia } from "../../utils /utils";
import ButtonOnLight from "../button-on-light/button-on-light.component";

import './quality-card.styles.scss'

const getUrlMedia = (img, dir) => {
    return getBaseUrlMedia().concat('/',dir,'/','desktop','/',img)
}

const QualityCard = ({data, className = ''}) => {
    const history = useHistory();
    const style = data.imageBackground ? {backgroundImage: `url(${getUrlMedia(data.imageBackground, data.imgBckDir)})`, transform: `${data.imgBkgPosition}`} : {}
    
    return (
        <div className={`quality-card ${className}`}>
            <div className={`quality-card__box ${className}`} style={style}>
                <img src={`${getUrlMedia(data.image, data.imageDir)}`} className={`quality-card__box__img ${className}`} alt={data.title} style={{transform: `${data.imgPosition}`}}/>
            </div>
            <h3 className={`quality-card__title ${className}`}>{data.title}</h3>
            {data.text ? <p className={`quality-card__text ${className}`}>{data.text}</p> : null}
            {data.buttonTitle ? <ButtonOnLight className={`quality-card__btn ${className}`}title={data.buttonTitle} handleClick={() => history.push(data.buttonLink)} /> : null}
        </div>
    )
}

export default QualityCard;