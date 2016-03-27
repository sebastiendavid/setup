import { combineReducers } from 'redux';
import list from 'src/list/listReducer';

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}

export default combineReducers({
  list
});
