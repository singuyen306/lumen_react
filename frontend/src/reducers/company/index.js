import {companyActionType} from "../../constants";

const listCompany = (state = [], action) => {
    switch (action.type){
        case companyActionType.GET_ALL_REQUEST:
            return action.listCompany
        default:
            return state;
    }
}

export default listCompany;
