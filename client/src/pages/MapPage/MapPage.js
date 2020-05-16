import React, {Component} from 'react';
// import { render } from 'react-dom'
// import PropTypes from 'prop-types';
import LMap from '../../components/leafletMap';

class MapPage extends Component  {
   

  render() {
 
  return (
    <div>
      <LMap />
    </div>
  );
  }
}




export default MapPage;