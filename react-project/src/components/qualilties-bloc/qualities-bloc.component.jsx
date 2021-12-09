import React from "react";
import { QualityCardPassionate, QualityCardFriendly, QualityCardResourceful } from '../../components/data-quality/data-quality.component'

import './qualities-bloc.styles.scss'

const QualitiesBloc = () => {
    return (
        <div className="qualities-bloc">
            <QualityCardPassionate/>
            <QualityCardResourceful/>
            <QualityCardFriendly/>
        </div>
    )
}

export default QualitiesBloc