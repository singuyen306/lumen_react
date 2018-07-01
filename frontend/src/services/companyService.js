import {axiosConfig as axios } from './axiosConfig';

export const getAllCompany = (params) => {
    return (
        axios.get(`/v1/list-company`, { params })
            .catch(function (error) {
                console.log(error);
            })
    );
}