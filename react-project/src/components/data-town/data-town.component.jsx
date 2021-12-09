import React from "react";

import './data-town.styles.scss'

import {getDataTownInfos} from "../../data/data"
import TownCard from '../../components/town-card/town-card.component'

function withData(TownCard, selectData, name, className = '') {
    return function (props) {
        const datas = selectData(getDataTownInfos)
        const townDatas = datas.filter(data => data.name.toLowerCase() === name)
        return townDatas.map(data => (
            <TownCard data={data} className={`data-town ${className}`} {...props} />
        ))
    }
}

export const CanadaTownCard = withData(
    TownCard,
    DataSource => DataSource().dataTownInfos,
    'canada'
)

export const AustraliaTownCard = withData(
    TownCard,
    DataSource => DataSource().dataTownInfos,
    'australia',
    'reverse'
)

export const UnitedKingdomTownCard = withData(
    TownCard,
    DataSource => DataSource().dataTownInfos,
    'united kingdom'
)