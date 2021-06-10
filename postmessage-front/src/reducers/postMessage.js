import { ACTION_TYPES } from "../actions/PostMessage";

const initialState = {
<<<<<<< HEAD
  list: [],
};

const postMessage = (state = initialState, action) => {
=======
  list:[],
};

export const postMessage = (state = initialState, action) => {
>>>>>>> develop
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
<<<<<<< HEAD
        list: [...action.playload],
      };
    default:
=======
        list:[...action.payload],
      };
      case ACTION_TYPES.CREATE:
        return{
          ...state,
          list:[...state.list, action.payload]
        };
        case ACTION_TYPES.UPDATE:
        return {
          ...state,
          list: state.list.map(x => x._id === action.payload._id ? action.payload :x )
        };
        case ACTION_TYPES.DELETE:
          return {
            ...state,
            list: state.list.filter(x => x._id !== action.payload)
          }
    default:     
>>>>>>> develop
      return state;
  }
};

<<<<<<< HEAD
export default postMessage;
=======
 
>>>>>>> develop
