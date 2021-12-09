import React from "react";
import LinkCard from "../link-card/link-card.component";
import { getCardInfos } from "../../data/data";


import './data-card.styles.scss'

function withData(LinkCard, selectData, linkCard, size = 'small') {
    return function (props) {
        const datas = selectData(getCardInfos)
        const cardDatas = datas.filter(data => data.link === linkCard && data.size === size) 
        return cardDatas.map(data => (
            <LinkCard data={data} size={size} {...props} />
        ))
    }
}

export const DataCardWebDesignLarge = withData(
    LinkCard,
    DataSource => DataSource().cardInfos,
    'web-design',
    'large'
)

export const DataCardWebDesign = withData(
    LinkCard,
    DataSource => DataSource().cardInfos,
    'web-design'
)

export const DataCardGraphicDesign = withData(
    LinkCard,
    DataSource => DataSource().cardInfos,
    'graphic-design'
)

export const DataCardAppDesign = withData(
    LinkCard,
    DataSource => DataSource().cardInfos,
    'app-design'
)