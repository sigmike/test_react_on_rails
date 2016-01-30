import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

export function editArrowStart(arrow) {
  return {
    type: actionTypes.EDIT_ARROW_START,
    arrow: arrow,
  };
}
