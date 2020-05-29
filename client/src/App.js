import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Home from './pages/Home';

import Nav from './components/Nav';
import Footer from './components/Footer';

import { ModalProvider } from './Context/ModalContext';
import { Provider } from './Context/GlobalContext';

export default function App() {
  return (
    <Router>
      <Provider>
        <ModalProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
          <Footer />
        </ModalProvider>
      </Provider>
    </Router>
  );
}
