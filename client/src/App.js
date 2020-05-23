import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './pages/admin';
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
      <>
        <Router>
          <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/admin' component={Admin} />
            </Switch>
          </Router>
        <Footer />
      </>
    );
  }
}

export default App;
