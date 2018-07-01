import React, { Component } from 'react';

class CompanyListItem extends Component{

    showCompanyItem = (listCompany) => {
        return listCompany.map((company) => {
            return (
                <tr key={company.id}>
                    <td>{ company.id }</td>
                    <td>{ company.name }</td>
                    <td>{ company.email }</td>
                    <td>{ company.director }</td>
                </tr>
            )
        })
    }

    render(){
        return (
            this.showCompanyItem(this.props.listCompany)
        )
    }
}

export default CompanyListItem;