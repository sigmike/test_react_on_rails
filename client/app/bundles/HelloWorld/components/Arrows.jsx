import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';

const propTypes = {
  arrows: PropTypes.instanceOf(Immutable.List),
};

const Arrow = ({start, end}) => {
  return <svg xmlns="http://www.w3.org/svg/2000"
    width={100}
    height={100}
    fill={'red'}>
      <circle key="start" cx={start.x} cy={start.y} r={5} />
      <circle key="end" cx={end.x} cy={end.y} r={5} />
  </svg>;
}

function select(state) {
  return {
    arrows: state.$$helloWorldStore.get('arrows'),
  }
}

function Arrows({ arrows }) {
  var arrow = (arrow, i) => {
    return <Arrow key={i} {...arrow.toJS()}/>;
  }
  return <div>{arrows.map(arrow)}</div>;
}

Arrows.propTypes = propTypes;

export default connect(select)(Arrows);

