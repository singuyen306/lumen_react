import { userActionType } from "../../constants";
import axios from 'axios';

export const handleLogin = (data) => {
    return (dispatch) => {
        return (
            axios.post(`/v1/login`, data)
                .then( response => {
                    dispatch(onLogin(response.data))
                })
                .catch(function (error) {
                    console.log(error);
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
