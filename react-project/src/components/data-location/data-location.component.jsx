import React from "react";
import QualityCard from "../quality-card/quality-card.component";
import { getLocationInfos } from "../../data/data";


import './data-location.styles.scss'

function withData(QualityCard, selectData, location) {
    return function (props) {
        const datas = selectData(getLocationInfos)
        const locationDatas = datas.filter(data => data.title.toLowerCase() === location) 
        return locationDatas.map(data => (
            <QualityCard data={data} {...props} />
        ))
    }
}

export const LocationCardCanada = withData(
    QualityCard,
    DataSource => DataSource().locationsInfos,
    'canada'
)

export const LocationCardAustralia = withData(
    QualityCard,
    DataSource => DataSource().locationsInfos,
    'australia'
)

export const LocationCardUnitedKingdom = withData(
    QualityCard,
    DataSource => DataSource().locationsInfos,
    'united kingdom'
)
