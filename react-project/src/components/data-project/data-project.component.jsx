import React from "react";
import QualityCard from "../quality-card/quality-card.component";
import { getProjectsInfos } from "../../data/data";


import './data-project.styles.scss'

function withData(QualityCard, selectData, page) {
    return function (props) {
        const datas = selectData(getProjectsInfos)
        const projectDatas = datas.filter(data => data.type === page) 
        return projectDatas.map(data => (
            <QualityCard data={data} className="project" {...props} />
        ))
    }
}

export const ProjectCardWebDesign = withData(
    QualityCard,
    DataSource => DataSource().projectsInfos,
    'web-design'
)

export const ProjectCardGraphicDesign = withData(
    QualityCard,
    DataSource => DataSource().projectsInfos,
    'graphic-design'
)

export const ProjectCardAppDesign = withData(
    QualityCard,
    DataSource => DataSource().projectsInfos,
    'app-design'
)