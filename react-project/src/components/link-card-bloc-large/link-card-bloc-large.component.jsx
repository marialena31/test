import React from "react";
import { DataCardAppDesign, DataCardGraphicDesign, DataCardWebDesignLarge } from "../../components/data-card/data-card.component";

import './link-card-bloc-large.styles.scss'

const LinkCardBlocLarge = () => {
    return (
        <div className="link-card-bloc-large">
            <DataCardWebDesignLarge/>
            <div className="link-card-bloc-large__col">
                <DataCardAppDesign/>
                <DataCardGraphicDesign/>
            </div>
        </div>
    )
}

export default LinkCardBlocLarge;