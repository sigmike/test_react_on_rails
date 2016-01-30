import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { editArrowStart } from '../actions/helloWorldActionCreators';

const propTypes = {
  arrows: PropTypes.instanceOf(Immutable.List),
};

const ArrowStart = ({x, y, onClick}) => {
  return <circle key="start" cx={x} cy={y} r={5} onClick={onClick}/>;
};

const ArrowEnd = ({x, y, onClick}) => {
  return <circle key="end" cx={x} cy={y} r={5} onClick={onClick} />;
};

const Arrow = ({start, end, onStartClick, onEndClick}) => {
  return <svg xmlns="http://www.w3.org/svg/2000"
    width={100}
    height={100}
    fill={'red'}>
      <ArrowStart x={start.x} y={start.y} onClick={onStartClick} />
      <ArrowEnd x={end.x} y={end.y} onClick={onEndClick} />
  </svg>;
}

function select(state) {
  return {
    arrows: state.$$helloWorldStore.get('arrows'),
  }
}

function Arrows({ arrows, dispatch }) {
  var arrow = (arrow, i) => {
    return <Arrow
      key={i}
      {...arrow.toJS()}
      onStartClick={() => { dispatch(editArrowStart(arrow)); }}
    />;
  }
  return <div>{arrows.map(arrow)}</div>;
}

Arrows.propTypes = propTypes;

export default connect(select)(Arrows);

