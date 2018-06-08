import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Home from './Home';
import OtherSite from './OtherSite';

const App = ({ children }) => (
  <div>
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="othersite">
        <h2>OtherSite</h2>
      </Link>
    </nav>
    <Router>
      <Home path="/" />
      <OtherSite path="othersite" />
    </Router>
  </div>
);

render(<App />, document.getElementById('app'));
