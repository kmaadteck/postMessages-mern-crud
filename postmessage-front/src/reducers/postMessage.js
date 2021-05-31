import { ACTION_TYPES } from "../actions/PostMessage";

const initialState = {
  list: [],
};

const postMessage = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.playload],
      };
    default:
      return state;
  }
};

export default postMessage;
