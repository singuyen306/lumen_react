import {companyActionType} from "../../constants";

//init state
let initialState = [];

const listCompany = (state = initialState, action) => {
    switch (action.type){
        case companyActionType.GET_ALL_REQUEST:
            state = action.listCompany;

            return state;
        default:
            return state;
    }
}

export default listCompany;
