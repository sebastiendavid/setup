import { createReducer } from 'src/store/reducers';
import moment from 'moment';

const initialState = {
  one: { date: moment().format() },
  two: { date: moment().format() }
};

export default createReducer(initialState, {
  UPDATE_ONE(state) {
    return Object.assign({}, state, {
      one: { date: moment().format() }
    });
  },
  UPDATE_TWO(state) {
    return Object.assign({}, state, {
      two: { date: moment().format() }
    });
  }
});
