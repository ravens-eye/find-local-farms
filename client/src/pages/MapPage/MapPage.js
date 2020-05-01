import React, {Component} from 'react';
// import { render } from 'react-dom'
// import PropTypes from 'prop-types';
import LMap from '../../components/leafletMap';

class MapPage extends Component  {
  constructor(props){
    super(props);
    this.state={
 
    }
   
  }
  

  render() {
 
  return (
    <div>
      <LMap />
    </div>
  );
  }
}


// render(<Map />, document.getElementById('container'))

export default MapPage;