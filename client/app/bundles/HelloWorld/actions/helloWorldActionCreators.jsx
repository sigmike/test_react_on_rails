import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

export function editArrowStart(index, startX, startY) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.EDIT_ARROW_START,
      index: index,
    });
    const handleMove = (e) => {
      dispatch({
        type: actionTypes.MOVE_ARROW,
        index: index,
        x: e.screenX - startX,
        y: e.screenY - startY,
      });
      startX = e.screenX;
      startY = e.screenY;
    };
    $(document).on("mousemove", handleMove);
    $(document).one("mouseup", (e) => {
      $(document).off("mousemove", handleMove);
      dispatch(submitArrowEdit(index));
    });
  }
}

export function stopArrowEdit(index) {
  return {
    type: actionTypes.STOP_ARROW_EDIT,
    index: index,
  };
}

export function startArrowLoading(index) {
  return {
    type: actionTypes.START_ARROW_LOADING,
    index: index,
  };
}

export function stopArrowLoading(index) {
  return {
    type: actionTypes.STOP_ARROW_LOADING,
    index: index,
  };
}

export function submitArrowEdit(index) {
  return dispatch => {
    dispatch(stopArrowEdit(index));
    dispatch(startArrowLoading(index));
    new Promise(function(resolve, reject) {
      setTimeout(resolve, 1000);
    }).then(() => {
      dispatch(stopArrowEdit(index));
      dispatch(stopArrowLoading(index));
    });
  };
}
