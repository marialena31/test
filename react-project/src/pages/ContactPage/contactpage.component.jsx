import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './contactpage.styles.scss'
import EntetePage from "../../components/entete-page/entete-page.component";
import LocationsBloc from "../../components/locations-bloc /locations-bloc.component";

const ContactPage = () => {
    return (
        <div className="page bck-img contact">
            <Header />
            <EntetePage/>
            <LocationsBloc/>
            <Footer className="contact"/>
        </div>
    )
}

export default ContactPage;