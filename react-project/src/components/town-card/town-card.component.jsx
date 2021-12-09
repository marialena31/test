import React from "react";

import './town-card.styles.scss'

import { getBaseUrlMedia } from "../../utils /utils";
import CustomMap from "../../components/custom-map/custom-map.component"

const TownCard = ({data, className = ''}) => {
    const getUrlMedia = (img, dir) => {
        return getBaseUrlMedia().concat('/',dir,'/','desktop','/',img)
    }

    return (

        <div className={`town-card ${className}`}>
            <div className={`town-card__infos ${className}`} style={{backgroundImage: `url(${getUrlMedia(data.imageBackground, data.imgBckDir)})`}}>
                <h2 className={`town-card__infos__name ${className}`}>{data.name}</h2>
                <div className={`town-card__infos__details ${className}`}>
                    <div className={`town-card__infos__details__address ${className}`}>
                        <span className={`town-card__infos__details__address__title ${className}`}>{data.title}</span>
                        <span className={`town-card__infos__details__address__street ${className}`}>{data.street}</span>
                        <span className={`town-card__infos__details__address__town ${className}`}>{data.town}</span>
                    </div>
                    <div className={`town-card__infos__details__contact ${className}`}>
                        <span className={`town-card__infos__details__contact__title ${className}`}>Contact</span>
                        <span className={`town-card__infos__details__contact__tel ${className}`}>{data.tel}</span>
                        <span className={`town-card__infos__details__contact__mail ${className}`}>{data.mail}</span>
                    </div>
                </div>
            </div>
            <div className={`town-card__map ${className}`}>
                <CustomMap latLng={data.latLng} popup={data.title}/>
            </div>
        </div>
    )
}

export default TownCard;