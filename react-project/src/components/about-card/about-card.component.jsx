import React from "react";

import './about-card.styles.scss'

import { getAboutCardInfos } from "../../data/data";
import EncartCouleur from "../../components/encart-couleur/encart-couleur.component";

function withData(EncartCouleur, selectData, name, className = '') {
    return function (props) {
        const datas = selectData(getAboutCardInfos)
        const aboutDatas = datas.filter(data => data.page === 'about' && data.name === name)
        return aboutDatas.map(data => (
                            <EncartCouleur data={data} className={`about-card ${className}`} {...props} />
                        ))
    }
}

export const WorldClass = withData(
    EncartCouleur,
    DataSource => DataSource().aboutCardInfos,
    'world-class',
    'reverse'
)

export const RealDeal = withData(
    EncartCouleur,
    DataSource => DataSource().aboutCardInfos,
    'real-deal'
)


