import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './locationspage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import { CanadaTownCard, AustraliaTownCard, UnitedKingdomTownCard } from '../../components/data-town/data-town.component'

const LocationsPage = () => {
    return (
        <div className="page">
            <Header />
            <CanadaTownCard/>
            <AustraliaTownCard/>
            <UnitedKingdomTownCard/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default LocationsPage;