import React from "react";
import QualityCard from "../quality-card/quality-card.component";
import { getQualityInfos } from "../../data/data";


import './data-quality.styles.scss'

function withData(QualityCard, selectData, quality) {
    return function (props) {
        const datas = selectData(getQualityInfos)
        const qualityDatas = datas.filter(data => data.title.toLowerCase() === quality) 
        return qualityDatas.map(data => (
            <QualityCard data={data} {...props} />
        ))
    }
}

export const QualityCardPassionate = withData(
    QualityCard,
    DataSource => DataSource().qualityInfos,
    'passionate'
)

export const QualityCardResourceful = withData(
    QualityCard,
    DataSource => DataSource().qualityInfos,
    'resourceful'
)

export const QualityCardFriendly = withData(
    QualityCard,
    DataSource => DataSource().qualityInfos,
    'friendly'
)
