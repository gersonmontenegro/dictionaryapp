import { combineReducers } from 'redux';

const INITIAL_STATE = {
    results: []
};

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    results: resultsReducer
});