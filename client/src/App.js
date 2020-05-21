import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './pages/admin';
import Home from './pages/home';
import Login from './pages/Login';

import Nav from './components/Nav';
import Footer from './components/Footer';

import ModalContext, { modalDefault} from './Context/ModalContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <ModalContext.Provider value={modalDefault}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <Footer />
        </ModalContext.Provider>
      </Router>
    );
  }
}

export default App;
