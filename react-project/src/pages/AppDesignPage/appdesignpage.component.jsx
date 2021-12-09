import React from "react";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import './appdesignpage.styles.scss'
import TalkAbout from "../../components/talk-about/talk-about.component";
import EntetePage from "../../components/entete-page/entete-page.component";
import { LinkCardBlocWebGraph } from "../../components/link-card-bloc/link-card-bloc.component"
import { ProjectCardBlocApp } from "../../components/project-card-bloc/project-card-bloc.component"

const AppDesignPage = () => {
    return (
        <div className="page bck-img">
            <Header />
            <EntetePage/>
            <ProjectCardBlocApp/>
            <LinkCardBlocWebGraph/>
            <TalkAbout />
            <Footer />
        </div>
    )
}

export default AppDesignPage;