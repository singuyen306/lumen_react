import { userActionType } from "../../constants";
import { logout as authLogout } from "../../helpers/auth";

//init state
let initialState = true;

const onLogout = (state = initialState, action) => {
    switch (action.type){
        case userActionType.LOGOUT:
            authLogout();

            return [...state];
        default:
            return state;
    }
}

export default onLogout;
