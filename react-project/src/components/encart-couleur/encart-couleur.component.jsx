import React from "react";
import { useHistory } from 'react-router-dom';
import ButtonOnDark from "../button-on-dark/button-on-dark.component";
import { getBaseUrlMedia } from "../../utils /utils";
import ContactForm from "../contact-form/contact-form.component";

import './encart-couleur.styles.scss'

const EncartCouleur = ({data, className}) => {
    const history = useHistory();

    const getUrlMedia = (img, dir) => {
        return getBaseUrlMedia().concat('/',dir,'/','desktop','/',img)
    }

    const classNameSupp = data.image && data.buttonTitle ? "big-height" : (data.image || data.form)  && !data.buttonTitle ? "middle-height" : ""

    return (           
        <div className={`encart-couleur ${data.page} ${className} ${classNameSupp}`} style={{backgroundImage: `url(${getUrlMedia(data.imageBackground, data.imgBckDir)})`, backgroundPosition: `${data.imgBkgPosition}`}}>
            <div className={`encart-couleur__text ${data.page}  ${className} ${classNameSupp}`}>
                <h2 className={`encart-couleur__text__title ${data.page}  ${className} ${classNameSupp}`}>
                    {data.title}
                </h2>
                {data.info ? <p  className={`encart-couleur__text__info ${data.page}  ${className} ${classNameSupp}`}>{data.info}</p> : null}
                {data.info1 && data.info2 ? <><p  className={`encart-couleur__text__info ${data.page}  ${className} ${classNameSupp}`}>{data.info1}</p><br></br>
                 <p  className={`encart-couleur__text__info ${data.page}  ${className} ${classNameSupp}`}>{data.info2}</p></> : null}

                {data.buttonTitle && data.image ? <ButtonOnDark className={`encart-couleur__text__btn  ${className} ${data.page}`} title={data.buttonTitle} handleClick={() => history.push(data.buttonLink)} /> : null}
            </div>
            {data.buttonTitle && !data.image ? <ButtonOnDark className={`encart-couleur__btn  ${className} ${data.page} ${classNameSupp}`}title={data.buttonTitle} handleClick={() => history.push(data.buttonLink)} /> : null}
            {data.image ?
                <div className={`encart-couleur__picture ${data.page}  ${className} ${classNameSupp}`} >
                    <img src={`${getUrlMedia(data.image, data.imageDir)}`} className={`encart-couleur__picture__img  ${className} ${data.page}  ${classNameSupp}`} alt={data.page}/>
                </div>
            : null}
            {data.form ?
            <ContactForm/>
            : null}
        </div>
    )
}

export default EncartCouleur;