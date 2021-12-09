import React from "react";
import { useLocation } from 'react-router-dom';

import './entete-page.styles.scss'

import getPageEnteteInfos from "../../data/data";
import EncartCouleur from "../../components/encart-couleur/encart-couleur.component";

function withData(EncartCouleur, selectData) {
    return function (props) {
        const location = useLocation()
        const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1)

        const datas = selectData(getPageEnteteInfos)
        const pageDatas = datas.filter(data => data.page === currentPage)
        return pageDatas.map(data => (
                            <EncartCouleur data={data} {...props} />
                        ))
    }
}

const EntetePage = withData(
    EncartCouleur,
    DataSource => DataSource().enteteInfos,
)

export default EntetePage;