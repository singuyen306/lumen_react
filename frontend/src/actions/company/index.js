import { companyActionType } from '../../constants';
import { companyService } from '../../services';

export const getAllCompany = () => {
    return (dispatch) => {
        return (
            companyService.getAllCompany()
                .then(response => {
                    dispatch(getListCompany(response))
                }).catch(error => {
                console.log(error)
            })
        );
    }
}

export const getListCompany = (listCompany) => {
    return {
        type: companyActionType.GET_ALL_REQUEST,
        listCompany
    }
}