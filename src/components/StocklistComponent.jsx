import React, { Component } from 'react'
import InvestorService from '../services/InvestorService' 
class StocklistComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stocks: []
        }
        this.buyStock = this.buyStock.bind(this);
        this.sellStock = this.sellStock.bind(this);
    }
    sellStock(companyId){
        InvestorService.sellStock(companyId).then( res => {
            this.setState({stocks: this.state.stocks.filter(stock => stock.companyId !== companyId)});
        });
    }
    viewStock(companyId){
        this.props.history.push(`/view-stock/${companyId}` );
    }
    componentDidMount(){
        InvestorService.getStock().then((res) => {
            this.setState({ stocks: res.data});
        });
    }

    buyStock(){
        this.props.history.push('/buy-stock');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Stocks List</h2>
                 <div className = "row">
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Company Id</th>
                                    <th> Company Name</th>
                                    <th> Stock Price</th>
                                    <th> Quantity</th>
                                    <th> Order Type</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stocks.map(
                                         stock=> 
                                        <tr key = {stock.companyId}>
                                           <td> { stock.companyId} </td>   
                                             <td> { stock.companyName} </td>   
                                             <td> {stock.stockPrice}</td>
                                             <td> {stock.stockQuantity}</td>
                                             <td> {stock.stockOrderType}</td>

                                             <td>
                                                 <button onClick={ () => this.viewStock(stock.companyId)} className="btn btn-primary"> View </button>
                                                 <button  style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.buyStock}> Buy </button>
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

export default StocklistComponent



