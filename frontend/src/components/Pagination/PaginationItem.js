import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

class PaginationItem extends Component{

    handlePageChange = (page) => {
        this.props.handlePageChange(page);
    }

    render(){
        return (
            <Pagination
                activePage={this.props.activePage}
                itemsCountPerPage={this.props.itemsCountPerPage}
                totalItemsCount={this.props.totalItemsCount}
                onChange={this.handlePageChange}
            />
        )
    }
}

export default PaginationItem;