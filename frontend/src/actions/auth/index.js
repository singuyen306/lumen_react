import { userActionType } from "../../constants";
import { authService } from '../../services';

export const handleLogin = (data) => {
    return (dispatch) => {
        return (
            authService.loginRequest(data)
                .then(response => {
                    dispatch(onLogin(response.data))
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
