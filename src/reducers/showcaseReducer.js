import { combineReducers } from 'redux';

const INITIAL_STATE = {

};

const showcaseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  showcase: showcaseReducer,
});
