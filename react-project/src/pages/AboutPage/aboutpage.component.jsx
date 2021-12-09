import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './aboutpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import LocationsBloc from "../../components/locations-bloc /locations-bloc.component";
import { WorldClass, RealDeal } from "../../components/about-card/about-card.component";

const AboutPage = () => {
    return (
        <div className="page bck-img about">
        
            <Header />
            <EntetePage/>
            <WorldClass/>
            <LocationsBloc/>
            <div className="bkground-img-about">
                <RealDeal/>
            </div>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default AboutPage;