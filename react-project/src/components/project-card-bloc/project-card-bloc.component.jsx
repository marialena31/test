import React from "react";
import { ProjectCardAppDesign, ProjectCardWebDesign,  ProjectCardGraphicDesign } from "../../components/data-project/data-project.component";

import './project-card-bloc.styles.scss'

export const ProjectCardBlocGraph = () => {
    return (
        <div className="project-card-bloc">
            <ProjectCardGraphicDesign/>
        </div>
    )
}

export const ProjectCardBlocWeb = () => {
    return (
        <div className="project-card-bloc">
            <ProjectCardWebDesign/>
        </div>
       
    )
}

export const ProjectCardBlocApp = () => {
    return (
        <div className="project-card-bloc">
            <ProjectCardAppDesign/>
        </div>
    )
}