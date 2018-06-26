import { combineReducers } from 'redux';
import listCompany  from './company';
import candidate from './candidate';
import job from './job';
import { onLogin, onLogout }  from './auth';

export default combineReducers({
    listCompany,
    job,
    candidate,
    onLogin,
    onLogout
});