import React, { Component } from 'react'
import InvestorService from '../services/InvestorService' 
class WatchListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                watchlist: [],
                investorId: this.props.match.params.investorId
        }
        this.sellStock = this.sellStock.bind(this);
        this.viewStock = this.viewStock.bind(this);
    }
    sellStock(investmentId){
    InvestorService.sellStock(investmentId).then( res => {
        this.setState({watchlist: this.state.watchlist.filter(investment => investment.investmentId !== investmentId)});
    });
}
    componentDidMount(){
        console.log("watchlist")
        InvestorService.getwatchlist(this.state.investorId).then((res) => {
            this.setState({ watchlist: res.data});
        });
    }
    viewStock(investmentCompanySymbol){
        this.props.history.push(`/view-stock/${investmentCompanySymbol}` );
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Watch List</h2>
                 <div className = "row">
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Inestment Id</th>
                                    <th> Company Id</th>
                                    <th> Company Name</th>
                                    <th> Investment Amount</th>
                                    <th> Investor Id</th>
                                    <th> No of Stocks</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.watchlist.map(
                                         investment=> 
                                        <tr key = {investment.investmentId}> 
                                        <td> { investment.investmentId}  </td>
                                             <td> { investment.investmentCompanySymbol} </td>   
                                             <td> {investment.investmentCompanyName}</td>
                                             <td> {investment.investmentAmount}</td>
                                             <td> {investment.investmentInvestorId}</td>
                                             <td> {investment.noOfStocks}</td>


                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.sellStock(investment.investmentId)} className="btn btn-danger"> sell </button>                                             </td>
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

export default WatchListComponent



