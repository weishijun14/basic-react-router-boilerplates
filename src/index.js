import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import Loadable from 'react-loadable'; //动态引入
import mojs from 'mo-js'; // mo-js本身就是全局引用

const LoadableComponent2 = Loadable({
  loader: () => import('./components/OtherSite'),
  loading() {
    return <h1> loading... </h1>;
  }
});

const LoadableComponent = Loadable({
  loader: () => import('./components/CodepenClap'),
  loading() {
    return <h1> loading... </h1>;
  }
});

const App = ({ children }) => (
  <div>
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/othersite">
        <h2>OtherSite</h2>
      </Link>
      <Link to="/codepenClap">
        <h2>codepenClap</h2>
      </Link>
    </nav>
    <Router>
      <Home path="/" />
      <LoadableComponent path="/othersite" />
      <LoadableComponent2 path="/codepenClap" />
    </Router>
  </div>
);

render(<App />, document.getElementById('app'));
