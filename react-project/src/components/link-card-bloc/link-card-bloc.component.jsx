import React from "react";
import { DataCardAppDesign, DataCardGraphicDesign,  DataCardWebDesign } from "../../components/data-card/data-card.component";

import './link-card-bloc.styles.scss'

export const LinkCardBlocAppGraph = () => {
    return (
        <div className="link-card-bloc">
            <DataCardAppDesign/>
            <DataCardGraphicDesign/>
        </div>
    )
}

export const LinkCardBlocWebGraph = () => {
    return (
        <div className="link-card-bloc">
            <DataCardWebDesign/>
            <DataCardGraphicDesign/>
        </div>
    )
}

export const LinkCardBlocAppWeb = () => {
    return (
        <div className="link-card-bloc">
            <DataCardAppDesign/>
            <DataCardWebDesign/>
        </div>
    )
}