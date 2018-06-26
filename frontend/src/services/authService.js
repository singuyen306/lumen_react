import {axiosConfig as axios } from './axiosConfig';

export const loginRequest = (data) => {
    return (
        axios.post(`/v1/login`, data)
            .then( response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    );
}