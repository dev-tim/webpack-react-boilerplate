import { combineReducers } from 'redux'
import jobsReducer from './jobs-reducer';
import searchRequestsReducer from './search-requests-reducer';

export default combineReducers({
    jobsReducer,
    searchRequestsReducer
})