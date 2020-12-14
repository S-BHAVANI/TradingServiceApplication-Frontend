import React, { Component } from 'react'
import CompanyManagerAdminService from '../services/CompanyManagerAdminService'

class ViewCompanyManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyManagerId: this.props.match.params.companyManagerId,
            companymanager: {}
        }
    }

    componentDidMount(){
        CompanyManagerAdminService.getCompanyManagerById(this.state.companyManagerId).then( res => {
            this.setState({companymanager: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Company Manager Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Company Manager Id: </label>
                            <div> { this.state.companymanager.companyManagerId }</div>
                        </div>
                        <div className = "row">
                            <label> Company Name: </label>
                            <div> { this.state.companymanager.companyManagerCompanyName }</div>
                        </div>
                        <div className = "row">
                            <label> Company Manager Email: </label>
                            <div> { this.state.companymanager.companyManagerEmail }</div>
                        </div>
                        <div className = "row">
                            <label> Company Manager Phone: </label>
                            <div> { this.state.companymanager.companyManagerPhone }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCompanyManagerComponent
