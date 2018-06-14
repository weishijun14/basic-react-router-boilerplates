import React from 'react';
import clapping from '../asset/clapping.svg';
import { Animocon } from './Animocon';
import './home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.iconDiv = React.createRef();
    this._handleClick = this._handleClick.bind(this);
  }
  componentDidMount() {
    const tlDuration = 300;
    const triangleBurst = new mojs.Burst({
      parent: '#clapButton',
      radius: { 50: 95 },
      count: 5,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: { 6: 0 },
        scale: 1,
        stroke: 'rgba(211,84,0 ,0.5)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    });
    const circleBurst = new mojs.Burst({
      parent: '#clapButton',
      radius: { 50: 75 },
      angle: 25,
      duration: tlDuration,
      children: {
        shape: 'circle',
        fill: 'rgba(149,165,166 ,0.5)',
        delay: 30,
        speed: 0.2,
        radius: { 3: 0 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    });
    // const countAnimation = new mojs.Html({
    //   el: '#clap--count',
    //   isShowStart: false,
    //   isShowEnd: true,
    //   y: { 0: -30 },
    //   opacity: { 0: 1 },
    //   duration: tlDuration
    // }).then({
    //   opacity: { 1: 0 },
    //   y: -80,
    //   delay: tlDuration / 2
    // });
    // const countTotalAnimation = new mojs.Html({
    //   el: '#clap--count-total',
    //   isShowStart: false,
    //   isShowEnd: true,
    //   opacity: { 0: 1 },
    //   delay: (3 * tlDuration) / 2,
    //   duration: tlDuration,
    //   y: { 0: -3 }
    // });
    const scaleButton = new mojs.Html({
      el: '#clapButton',
      duration: tlDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.out
    });
    const clap = document.getElementById('clapButton');
    clap.style.transform = 'scale(1, 1)';
    this._animationTimeline = new mojs.Timeline();
    this._animationTimeline.add([triangleBurst, circleBurst, scaleButton]);
  }

  _handleClick() {
    this._animationTimeline.replay();
    // this.setState(function(prevState, nextState) {
    //   return {
    //     count: Math.min(prevState.count + 1, 50),
    //     countTotal: prevState.countTotal + 1,
    //     isClicked: true
    //   };
    // });
  }

  render() {
    return (
      <div>
        <h1>HOME - SITE</h1>
        <button
          id="clapButton"
          ref={this.iconDiv}
          className="button"
          onClick={this._handleClick}
          style={{
            height: '100px',
            width: '100px',
            position: 'relative',
            left: '30%',
            top: '100px',
            cursor: 'pointer',
            border: '1px solid red',
            borderRadius: '50px',
            background: 'none'
          }}
        >
          <svg
            style={{
              fill: 'none',
              stroke: 'red',
              width: '80px',
              height: '80px'
            }}
          >
            <use xlinkHref={'#' + clapping.id} />
          </svg>
        </button>
      </div>
    );
  }
}

export default Home;
