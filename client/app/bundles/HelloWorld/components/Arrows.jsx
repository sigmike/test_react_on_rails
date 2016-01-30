import React, { PropTypes } from 'react';
import Immutable from 'immutable';

const propTypes = {
  arrows: PropTypes.instanceOf(Immutable.List),
};

const Arrow = ({start, end}) => {
  return <div>{JSON.stringify(start)}</div>;
}

export default function Arrows({ arrows }) {
  var arrow = (arrow, i) => {
    return <Arrow key={i} {...arrow.toJS()}/>;
  }
  return <div>{arrows.map(arrow)}</div>;
}

Arrows.propTypes = propTypes;
