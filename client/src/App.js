import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapPage from './pages/MapPage';
import Home from './pages/home';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/mapPage' component={MapPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
