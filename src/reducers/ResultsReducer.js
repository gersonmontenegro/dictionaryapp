import { combineReducers } from 'redux';

const INITIAL_STATE = {
    words: [],
    currentDetail: {}
};

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_WORD': {
            let c = 0;
            words = [];
            action.payload.lexicalEntries.map((item, index) => {
                words.push({
                    word: item.text,
                    lexicalCategory: item.lexicalCategory,
                    pronunciations: item.pronunciations,
                    senses: item.entries[0].senses,
                    key: c++
                });
            });
            const newState = { words };
            return newState;
        }
        case 'SET_DETAIL': {
            const newState = { ...state, currentDetail: { ...action.payload } };
            return newState;
        }
        default:
            return state;
    }
}

export default combineReducers({
    results: resultsReducer
});