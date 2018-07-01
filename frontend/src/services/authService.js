import {axiosConfig as axios } from './axiosConfig';

export const loginRequest = (data) => {
    return (
        axios.post(`/v1/login`, data)
            .catch(function (error) {
                console.log(error);
            })
    );
}