import React from "react";
import EncartCouleur from "../../components/encart-couleur/encart-couleur.component";

import './talk-about.styles.scss'
import { getTalkAboutInfos } from "../../data/data";

function withData(EncartCouleur, selectData) {
    return function (props) {
        const datas = selectData(getTalkAboutInfos)
        return datas.map(data => (
                            <EncartCouleur data={data} {...props} />
                        ))
    }
}

const TalkAbout = withData(
    EncartCouleur,
    DataSource => DataSource().talkAboutInfos,
)



export default TalkAbout;
