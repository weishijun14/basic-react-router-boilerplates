import React from 'react';
import clapping from '../asset/001-clapping.svg';
import mojs from 'mo-js';
import { Animocon } from './Animocon';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.iconDiv = React.createRef();
  }
  componentDidMount() {
    console.log(this.iconDiv.current, 233333);
    // new Animocon(this.iconDiv.current, {});
    new Animocon(this.iconDiv.current, {
      tweens: [
        new mojs.Burst({
          parent: this.iconDiv,
          radius: { 30: 90 },
          count: 6,
          children: {
            fill: '#C0C1C3',
            opacity: 0.6,
            radius: 15,
            duration: 1700,
            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
          }
        }),
        new mojs.Shape({
          parent: this.iconDiv,
          type: 'circle',
          radius: { 0: 60 },
          fill: 'transparent',
          stroke: '#C0C1C3',
          strokeWidth: { 20: 0 },
          opacity: 0.6,
          duration: 700,
          easing: mojs.easing.sin.out
        }),
        new mojs.Tween({
          duration: 1200,
          onUpdate: function(progress) {
            // if (progress > 0.3) {
            //   var elasticOutProgress = mojs.easing.elastic.out(
            //     1.43 * progress - 0.43
            //   );
            //   el1span.style.WebkitTransform = el1span.style.transform =
            //     'scale3d(' +
            //     elasticOutProgress +
            //     ',' +
            //     elasticOutProgress +
            //     ',1)';
            // } else {
            //   el1span.style.WebkitTransform = el1span.style.transform =
            //     'scale3d(0,0,1)';
            // }
          }
        })
      ],
      onCheck: () => {
        // this.iconDiv.current.getElementsByTagName('svg').backgroundColor =
        //   '#988ADE';
      },
      onUnCheck: () => {
        // this.iconDiv.color = '#coc1c3';
      }
    });
  }
  render() {
    return (
      <div>
        <h1>HOME - SITE</h1>
        <div
          ref={this.iconDiv}
          style={{
            width: '100px',
            height: '100px',
            position: 'relative',
            left: '30%',
            top: '100px',
            cursor: 'pointer'
          }}
        >
          <svg viewBox={clapping.viewBox}>
            <use xlinkHref={'#' + clapping.id} />
          </svg>
        </div>
      </div>
    );
  }
}

export default Home;
