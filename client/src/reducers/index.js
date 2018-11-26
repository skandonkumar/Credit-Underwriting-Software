import {combineReducers} from 'redux';
import authReducer from './authReducer';

//Whatever key we give here will be the key in redux state
export default combineReducers({
    auth: authReducer
});