import React, { Component } from 'react'
import CompanyManagerService from '../services/CompanyManagerService'

class ViewStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyId: this.props.match.params.companyId,
            stock: {}
        }
    }

    componentDidMount(){
        CompanyManagerService.getStockById(this.state.companyId).then( res => {
            this.setState({stock: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Stock Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Company Id: </label>
                            <div> { this.state.stock.companyId }</div>
                        </div>
                        <div className = "row">
                            <label> Company Name: </label>
                            <div> { this.state.stock.companyName }</div>
                        </div>
                        <div className = "row">
                            <label> Stock Price: </label>
                            <div> { this.state.stock.stockPrice }</div>
                        </div>
                        <div className = "row">
                            <label> Stock Quantity: </label>
                            <div> { this.state.stock.stockQuantity }</div>
                        </div>
                    </div>
                    <div className = "row">
                            <label> Stock OrderType: </label>
                            <div> { this.state.stock.stockOrderType }</div>
                        </div>
                    </div>

                </div>
        )
    }
}

export default ViewStockComponent
