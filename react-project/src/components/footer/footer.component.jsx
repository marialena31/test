import React from "react";
import { Link } from 'react-router-dom'

import Navigation from "../navigation/navigation.component";

import Logo from '../../assets/shared/desktop/logo-light.png'
import {ReactComponent as FacebookIcon}  from '../../assets/shared/desktop/icon-facebook.svg'
import {ReactComponent as YoutubeIcon} from '../../assets/shared/desktop/icon-youtube.svg'
import {ReactComponent as TwitterIcon} from '../../assets/shared/desktop/icon-twitter.svg'
import {ReactComponent as PinterestIcon} from '../../assets/shared/desktop/icon-pinterest.svg'
import {ReactComponent as InstagramIcon} from '../../assets/shared/desktop/icon-instagram.svg'

import './footer.styles.scss'

const Footer = ({className}) => {
    return (
        <footer className={`footer ${className}`}>
            <div className={`footer__content ${className}`}>
                <div className="footer__content__firstline">
                    <Link className="footer__content__firstline__logo" to='/'>
                        <img src={Logo} className="footer__content__firstline__logo__img" alt="logo"/>
                    </Link>
                    <Navigation />
                </div>
                <div className="footer__content__secondline">
                    <div className="footer__content__secondline__address">
                        <span className="footer__content__secondline__address__name">Designo Central Office</span>
                        <span className="footer__content__secondline__address__street">3886 Wellington Street</span>
                        <span className="footer__content__secondline__address__town">Toronto, Ontario M9C 3J5</span>
                    </div>
                    <div className="footer__content__secondline__contact">
                        <span className="footer__content__secondline__contact__title">Contact Us (Central Office)</span>
                        <span className="footer__content__secondline__contact__tel">P : +1 253-863-8967</span>
                        <span className="footer__content__secondline__contact__mail">M : contact@designo.co</span>
                    </div>
                    <div className="footer__content__secondline__socialmedia">
                        <FacebookIcon className="footer__content__secondline__socialmedia__item"/>
                        <YoutubeIcon className="footer__content__secondline__socialmedia__item"/>
                        <TwitterIcon className="footer__content__secondline__socialmedia__item"/>
                        <PinterestIcon className="footer__content__secondline__socialmedia__item"/>
                        <InstagramIcon className="footer__content__secondline__socialmedia__item"/>
                    </div>
                </div>     
            </div>
        </footer>
    )
}

export default Footer;

