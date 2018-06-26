import React, { Component } from 'react';
import {CompanyListPage} from "../../components/pages";
import { getAllCompany } from "../../actions/company";
import {connect} from 'react-redux';

class CompanyListContainer extends Component{

    render() {
        console.log(this.props.listCompany);
        return (
            <CompanyListPage />
        );
    }
}

const mapStateToProps = state => {
    return {
        listCompany: state.listCompany
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllCompany: dispatch(getAllCompany())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyListContainer);