import React from 'react';
import { withLeaflet } from 'react-leaflet';
import Locate from 'leaflet.locatecontrol';

class LocateControl extends React.Component {
  componentDidMount() {
    const { options, startDirectly, leaflet } = this.props;
    const { map } = leaflet;

    const lc = new Locate(options);
    lc.addTo(map);

    map.on('locationerror', e => {
      console.log(e.message);
    });

    if (startDirectly) {
      // request location update and set location
      lc.start();
    }
  }

  render() {
    return null;
  }
}

export default withLeaflet(LocateControl);
