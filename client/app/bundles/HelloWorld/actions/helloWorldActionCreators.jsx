import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

export function editArrowStart(index) {
  return {
    type: actionTypes.EDIT_ARROW_START,
    index: index,
  };
}

export function submitArrowEdit(index) {
  return {
    type: actionTypes.SUBMIT_ARROW_EDIT,
    index: index,
  };
}
