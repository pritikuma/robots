import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer,TileLayer,Popup,Marker } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
const Map = ({lat,long}) => {
    
    const customIcon = new Icon({
        iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/robot-512.png",
        iconSize: [38, 38] // size of the icon
      });
  return (
    
      <MapContainer doubleClickZoom={false} className='h-96 w-[100vw]' center={[lat,long]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  <Marker position={[lat,long]} icon={customIcon}>
    <Popup>
       <h1>Robo1</h1> 
    </Popup>
  </Marker>
</MapContainer>
    
  )
}

export default Map
