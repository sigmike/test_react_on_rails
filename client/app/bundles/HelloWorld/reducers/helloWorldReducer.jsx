import Immutable from 'immutable';

import actionTypes from '../constants/helloWorldConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type, name } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);

    case actionTypes.EDIT_ARROW_START:
      return $$state.setIn(['arrows', action.index, 'isEditing'], true);

    case actionTypes.STOP_ARROW_EDIT:
      return $$state.setIn(['arrows', action.index, 'isEditing'], false);

    case actionTypes.START_ARROW_LOADING:
      return $$state.setIn(['arrows', action.index, 'isLoading'], true);

    case actionTypes.STOP_ARROW_LOADING:
      return $$state.setIn(['arrows', action.index, 'isLoading'], false);

    case actionTypes.MOVE_ARROW:
      let {x, y} = $$state.getIn(['arrows', action.index, 'start']).toJS();
      x += action.x;
      y += action.y;

      return $$state.mergeIn(['arrows', action.index, 'start'], {x, y});

    default:
      return $$state;
  }
}
