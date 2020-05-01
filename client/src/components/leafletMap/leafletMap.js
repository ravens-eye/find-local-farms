import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import LocateControl from '../LocateControl';
import * as businessData from '../../data/demo.json';
import './leafletMap.css';


export const LeafletMap = () => {
  // State hooks
  //removed setState from state const to remove error
  const [state] = useState({
    lat: 34.926730,
    lng: -77.944321,
    zoom: 12,
  });
  const position = [state.lat, state.lng];
  const [activeBusiness, setActiveBusiness] = useState(null);

  // Constants
  const locateOptions = {
    position: 'topright',
    strings: {
      title: 'Show Current Location'
    },
    locateOptions: {
      maxZoom: 12
    },
    onActivate: () => {} // callback before engine starts retrieving locations
  };

  return (
    <Map className='container' center={position} zoom={state.zoom}>
      <TileLayer
        attribution='&copy; <a href=&apos;http://osm.org/copyright&apos;>OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
            {businessData.features.map(biz => (
      <Marker
        key={biz.properties.ID}
        position={[
          biz.geometry.coordinates[1],
          biz.geometry.coordinates[0]
        ]}
        onClick={() => {
          setActiveBusiness(biz);
        }}
      />
    ))}

    {activeBusiness && (
      <Popup
        position={[
          activeBusiness.geometry.coordinates[1],
          activeBusiness.geometry.coordinates[0]
        ]}
        onClose={() => {
          setActiveBusiness(null);
        }}
      >
        <div>
          <h2>{activeBusiness.properties.NAME}</h2>
          <p>{activeBusiness.properties.EMAIL}</p>
        </div>
      </Popup>
    )}
      <LocateControl options={locateOptions} startDirectly/>
    </Map>
  );
};

 export default LeafletMap;

