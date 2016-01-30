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
      console.log(action);
      return $$state.setIn(['arrows', action.index, 'isEditing'], true);

    case actionTypes.SUBMIT_ARROW_EDIT:
      console.log(action);
      return $$state.setIn(['arrows', action.index, 'isEditing'], false);

    default:
      return $$state;
  }
}
