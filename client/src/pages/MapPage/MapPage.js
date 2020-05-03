import React, {Component} from 'react';
// import { render } from 'react-dom'
import API from '../../utils/API'
import LMap from '../../components/leafletMap';

class MapPage extends Component  {
  constructor(props){
    super(props);
    this.state={
      businesses:[]
    }
   
  }
  //API Call for Data
componentDidMount() {
    this.getAllBusinesses();
};
getAllBusinesses = () => {
  API.getAllBusinesses()
    .then(res => {
      console.log(res);      
      this.setState({
        businesses: res
      })
    })
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