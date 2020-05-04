import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import LocateControl from '../LocateControl';
// import * as businessData from '../../data/demo.json';
import './leafletMap.css';

import { getAllBusinesses } from '../../api/businessApi';

export const LeafletMap = () => {
  // State hooks
  //removed setState from state const to remove error
  const [state] = useState({
    lat: 34.926730,
    lng: -77.944321,
    zoom: 12,
  });
  const position = [state.lat, state.lng];
  const [businessData, setBusinessData] = useState();
  const [activeBusiness, setActiveBusiness] = useState(null);

  useEffect(async () => {
    async function anon () {
      setBusinessData(await getAllBusinesses());
    }
    anon();
  }, [setBusinessData]);

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
      {businessData && businessData.length > 0 && businessData.map((biz, i) => (
        <Marker
          key={`${biz.createdAt}-${i}`}
          position={[
            biz.location[0].lat,
            biz.location[0].lng
          ]}
          onClick={() => {
            setActiveBusiness(biz);
          }}
        />
      ))}

      {activeBusiness && (
        <Popup
          position={[
            activeBusiness.location[0].lat,
            activeBusiness.location[0].lng
          ]}
          onClose={() => {
            setActiveBusiness(null);
          }}
        >
          <div>
            <h2>{activeBusiness.name}</h2>
            <p>Contact us</p>
            <ul>
              <li>{activeBusiness.contact.email}</li>
              <li>{activeBusiness.contact.phone}</li>
            </ul>
          </div>
        </Popup>
      )}
      <LocateControl options={locateOptions} startDirectly/>
    </Map>
  );
};

 export default LeafletMap;

