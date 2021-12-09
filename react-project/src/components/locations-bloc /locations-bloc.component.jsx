import React from "react";
import { LocationCardCanada, LocationCardAustralia, LocationCardUnitedKingdom } from '../../components/data-location/data-location.component'

import './locations-bloc.styles.scss'

const LocationsBloc = () => {
    return (
        <div className="locations-bloc">
            <LocationCardCanada/>
            <LocationCardAustralia/>
            <LocationCardUnitedKingdom/>
        </div>
    )
}

export default LocationsBloc