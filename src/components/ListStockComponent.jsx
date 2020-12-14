import React, { Component } from 'react'
import CompanyManagerService from '../services/CompanyManagerService'

class ListStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stocks: []
        }
        this.addStock = this.addStock.bind(this);
        this.editStock = this.editStock.bind(this);
        this.deleteStock = this.deleteStock.bind(this);
    }

   
    deleteStock(companyId){
    
        CompanyManagerService.deleteStock(companyId).then( res => {
       
            this.setState({stocks: this.state.stocks.filter(stock => stock.companyId !== companyId)});
        });
    }
    


    viewStock(companyId){
        this.props.history.push(`/view-stock/${companyId}`);
    }
    editStock(companyId){
        this.props.history.push(`/update-stock/${companyId}`);
    }

    componentDidMount(){
        CompanyManagerService.getStock().then((res) => {
            this.setState({ stocks: res.data});
        });
    }

    addStock(){
        this.props.history.push('/add-stock/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Stock List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStock}> Add Stock</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Company Name</th>
                                    <th> Stock Price</th>
                                    <th> Stock Quantity</th>
                                    <th> Stock OrderType</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stocks.map(
                                        stock => 
                                        <tr key = {stock.companyId}>
                                           
                                             <td> { stock.companyName} </td>
                                             <td> {stock.stockPrice}</td>
                                             <td> {stock.stockQuantity}</td>
                                    <td>{stock.stockOrderType}</td>
                                             <td>
                                                 <button onClick={ () => this.editStock(stock.companyId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStock(stock.companyId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStock(stock.companyId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStockComponent
