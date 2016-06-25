import { createReducer } from 'src/store/reducers';

const initialState = [];

export default createReducer(initialState, {
  LIST_INIT() {
    const list = [];
    for (let n = 0; n < 5; n++) {
      list.push({ id: n, label: `label ${n}` });
    }
    return list;
  },
  LIST_FILL(state) {
    const list = [...state];
    const length = list.length;
    for (let n = length; n < length + 5; n++) {
      list.push({ id: n, label: `label ${n}` });
    }
    return list;
  },
});
