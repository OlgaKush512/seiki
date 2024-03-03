"use client";

import { Icon } from "leaflet";
import React, { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Item } from "../lib/definitions";
import "leaflet/dist/leaflet.css";

interface Props {
  selectedAddress: Item;
}

const DinamicMap: FC<Props> = ({ selectedAddress }) => {
  return (
    <MapContainer
      center={[selectedAddress.lat, selectedAddress.lng]}
      zoom={15}
      style={{ height: "400px", width: "100%", border: "solid" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker
        position={[selectedAddress.lat, selectedAddress.lng]}
        icon={
          new Icon({
            iconUrl: "/marker.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>
          <div>
            <p>ID: {selectedAddress.id}</p>
            <p>Address: {selectedAddress.address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default DinamicMap;
