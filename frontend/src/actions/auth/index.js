import { userActionType } from "../../constants";
import { authService } from '../../services';

export const handleLogin = (data) => {
    return (dispatch) => {
        return (
            authService.loginRequest(data)
                .then(response => {
                    dispatch(onLogin(response))
                }).catch(error => {
                    console.log(error)
                })
        );
    }
}

export const onLogin = (data) => {
    return {
        type: userActionType.LOGIN_REQUEST,
        data
    }
}
