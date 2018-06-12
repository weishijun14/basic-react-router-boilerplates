import React from 'react';
import clapping from '../asset/001-clapping.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>HOME - SITE</h1>
        <svg viewBox={clapping.viewBox}>
          <use xlinkHref={'#' + clapping.id} />
        </svg>;
      </div>
    );
  }
}

export default Home;
