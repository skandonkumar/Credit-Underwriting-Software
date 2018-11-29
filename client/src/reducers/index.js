import {combineReducers} from 'redux';
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form'  //Inbuilt reducer of redux form

//Whatever key we give here will be the key in redux state
export default combineReducers({
    auth: authReducer,
    form: reduxForm
});