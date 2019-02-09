import { createStore } from 'redux';
import ResultsReducer from 'src/reducers/ResultsReducer';

const store = createStore(ResultsReducer);

export default store;