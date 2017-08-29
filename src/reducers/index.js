import {combineReducers} from 'redux';
import HeadlineReducer from './reducer_headline';
import SuggestReducer from './reducer_suggest'

const rootReducer = combineReducers({
    headline: HeadlineReducer,
    suggestions: SuggestReducer
});

export default rootReducer;
