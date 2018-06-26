import { userActionType } from "../../constants";
import { isLoggedIn, login as authLogin} from "../../helpers/Auth";

//init state
let initialState = isLoggedIn() ? true : false;

const onLogin = (state = initialState, action) => {
    switch (action.type){
        case userActionType.LOGIN_REQUEST:
            authLogin(action.data);

            return !state;
        default:
            return state;
    }
}

export default onLogin;
