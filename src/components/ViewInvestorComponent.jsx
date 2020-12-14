import React, { Component } from 'react'
import InvestorAdminService from '../services/InvestorAdminService'

class ViewInvestorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            investorId: this.props.match.params.investorId,
            investor: {}
        }
    }

    componentDidMount(){
        InvestorAdminService.getInvestorById(this.state.investorId).then( res => {
            this.setState({investor: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Investor Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Investor Id: </label>
                            <div> { this.state.investor.investorId }</div>
                        </div>
                        <div className = "row">
                            <label> Investor Name: </label>
                            <div> { this.state.investor.investorName }</div>
                        </div>
                        <div className = "row">
                            <label> Investor PanNum: </label>
                            <div> { this.state.investor.investorPannum }</div>
                        </div>
                        <div className = "row">
                            <label> Investor Email: </label>
                            <div> { this.state.investor.investorEmail }</div>
                        </div>
                        <div className = "row">
                            <label> Investor Phone: </label>
                            <div> { this.state.investor.investorPhone }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewInvestorComponent
