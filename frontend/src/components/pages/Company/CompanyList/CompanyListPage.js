import React, { Component } from 'react';
import CompanyListItem from "./CompanyListItem";
import PaginationItem from "../../../Pagination/PaginationItem";

class CompanyListPage extends Component{

    showCompanyItem = (listCompany) => {
        if(typeof listCompany !== 'undefined') {
            return (
                <CompanyListItem
                    listCompany={listCompany.data}
                />
            )
        }
    }

    handlePageChange = (page) => {
        this.props.handlePageChange(page);
    }

    showCompanyPagination = (listCompany) => {
        if(typeof listCompany !== 'undefined') {
            return (
                <PaginationItem
                    activePage={listCompany.current_page}
                    handlePageChange={this.handlePageChange}
                    totalItemsCount={listCompany.total}
                    itemsCountPerPage={listCompany.per_page}
                />
            )
        }
    }

    render() {
        let { listCompany } = this.props;

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Company
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li className="active">company</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-body">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Director</th>
                                            </tr>

                                            { this.showCompanyItem(listCompany) }
                                        </tbody>
                                    </table>
                                </div>

                                <div className="box-footer clearfix">
                                    <div className="pull-right">
                                        { this.showCompanyPagination(listCompany) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CompanyListPage;