import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './webdesignpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import { LinkCardBlocAppGraph } from "../../components/link-card-bloc/link-card-bloc.component"
import { ProjectCardBlocWeb } from "../../components/project-card-bloc/project-card-bloc.component"

const WebDesignPage = () => {
    return (
        <div className="page bck-img">
            <Header />
            <EntetePage />
            <ProjectCardBlocWeb/>
            <LinkCardBlocAppGraph/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default WebDesignPage;