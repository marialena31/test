import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './graphicdesignpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import { LinkCardBlocAppWeb } from "../../components/link-card-bloc/link-card-bloc.component"
import { ProjectCardBlocGraph } from "../../components/project-card-bloc/project-card-bloc.component"

const GraphicDesignPage = () => {
    return (
        <div className="page bck-img">
            <Header />
            <EntetePage/>
            <ProjectCardBlocGraph/>
            <LinkCardBlocAppWeb/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default GraphicDesignPage;