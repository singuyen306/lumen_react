import { combineReducers } from 'redux';
import company from './company';
import candidate from './candidate';
import job from './job';
import { onLogin, onLogout }  from './auth';

export default combineReducers({
    company,
    job,
    candidate,
    onLogin,
    onLogout
});