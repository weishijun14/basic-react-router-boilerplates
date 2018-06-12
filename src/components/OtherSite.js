import React from 'react';
import clap2 from '../asset/002-clap.svg';

class OtherSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Other - site</h1>
        <svg viewBox={clap2.viewBox}>
          <use xlinkHref={'#' + clap2.id} />
        </svg>;
      </div>
    );
  }
}

export default OtherSite;
