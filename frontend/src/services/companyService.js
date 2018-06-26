import {axiosConfig as axios } from './axiosConfig';

export const getAllCompany = () => {
    return (
        axios.get(`/v1/list-company`)
            .then( response => {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
    );
}