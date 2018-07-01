import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CompanyListPage } from "../../components/pages";
import { getAllCompany } from "../../actions/company";
import { connect } from 'react-redux';

class CompanyListContainer extends Component{

    componentDidMount(){
        this.props.getAllCompany();
    }

    handlePageChange = (page) => {
        this.props.getAllCompany(page);
    }

    render() {
        return (
            <CompanyListPage
                listCompany={this.props.listCompany.data}
                handlePageChange={this.handlePageChange}
            />
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
        getAllCompany: (page = 1) => {
            dispatch(getAllCompany(page))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyListContainer));