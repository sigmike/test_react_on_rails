import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { editArrowStart, submitArrowEdit } from '../actions/helloWorldActionCreators';

const propTypes = {
  arrows: PropTypes.instanceOf(Immutable.List),
};

const ArrowStart = ({x, y, onMouseDown}) => {
  return <circle key="start" cx={x} cy={y} r={5} onMouseDown={onMouseDown}/>;
};

const ArrowEnd = ({x, y, onClick}) => {
  return <circle key="end" cx={x} cy={y} r={5} onClick={onClick} />;
};

const Arrow = ({start, end, isEditing, isLoading, onStartMouseDown, onEndClick}) => {
  return <svg xmlns="http://www.w3.org/svg/2000"
    width={100}
    height={100}
    fill={isEditing ? 'blue' : 'red'}
    style={isLoading ? {opacity: 0.5} : null}>
      <g>
        <ArrowStart x={start.x} y={start.y} onMouseDown={onStartMouseDown} />
        <ArrowEnd x={end.x} y={end.y} onClick={onEndClick} />
      </g>
  </svg>;
}

const selectArrow = (state, ownProps) => {
  return {
    arrow: state.$$helloWorldStore.getIn(['arrows', ownProps.index]).toJS(),
  };
};

const EditableArrow = connect(selectArrow)(({arrow, dispatch, index}) => {
  return <Arrow
    {...arrow}
    onStartMouseDown={(e) => { console.log(e.screenX); if (!arrow.isEditing) dispatch(editArrowStart(index, e.screenX, e.screenY)); }}
  />;
});

function select(state) {
  return {
    arrows: state.$$helloWorldStore.get('arrows'),
  }
}

function Arrows({ arrows, dispatch }) {
  var arrow = (arrow, i) => {
    return <EditableArrow
      key={i}
      index={i}
    />;
  }
  return <div>{arrows.map(arrow)}</div>;
}

Arrows.propTypes = propTypes;

export default connect(select)(Arrows);

