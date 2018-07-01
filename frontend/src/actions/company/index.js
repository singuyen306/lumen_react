import { companyActionType } from '../../constants';
import { companyService } from '../../services';

export const getAllCompany = (page = 1, limit = 20) => {
    let params = {page: page, limit: limit};

    return (dispatch) => {
        return (
            companyService.getAllCompany(params)
                .then(response => {
                    dispatch(getListCompany(response.data))
                })
        );
    }
}

export const getListCompany = listCompany => {
    return {
        type: companyActionType.GET_ALL_REQUEST,
        listCompany
    }
}