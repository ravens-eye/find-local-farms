import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
  
    };
   
  }

  render() {
    return (
      <React.Fragment>
        <Router>
        
          <div>
            <Nav />
              <Switch>
                <Route exact path='/' component={Home} />
           
              </Switch>
              <Footer/>
          </div>
        </Router>  
      </React.Fragment>
    );
  }
}

export default App;
