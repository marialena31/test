import React from "react";
import  L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup } from '@monsonjeremy/react-leaflet'

import './custom-map.styles.scss'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const CustomMap = ({latLng, zoom = 12, popup}) => {
 return(
    <div className="custom-map">
     <MapContainer center={latLng} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Marker position={latLng}>
          <Popup>{popup}</Popup>
        </Marker>
      </MapContainer>
    </div>
 )  
}
export default CustomMap;


