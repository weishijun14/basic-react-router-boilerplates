import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import test from 'test/testAlias';
import Loadable from 'react-loadable'; //动态引入

const LoadableComponent = Loadable({
  loader: () => import('./components/OtherSite'),
  loading() {
    return <h1> loading... </h1>;
  }
});

const App = ({ children }) => (
  <div>
    <nav>
      <Link to="/dist">
        <h2>Home</h2>
      </Link>
      <Link to="/dist/othersite">
        <h2>OtherSite</h2>
      </Link>
    </nav>
    <Router>
      <Home path="/dist" />
      <LoadableComponent path="/dist/othersite" />
    </Router>
  </div>
);

render(<App />, document.getElementById('app'));
