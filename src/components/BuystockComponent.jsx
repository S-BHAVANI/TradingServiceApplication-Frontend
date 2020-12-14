import React, { Component } from 'react'
import InvestorService from '../services/InvestorService'
class BuystockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            investmentCompanySymbol :'',
            investmentCompanyName :'',
            investmentAmount :'',
            investmentInvestorId :'',
            noOfStocks :''
        }
        this.changeInvestmentCompanySymbolHandler = this.changeInvestmentCompanySymbolHandler.bind(this);
        this.changeInvestmentCompanyNameHandler = this.changeInvestmentCompanyNameHandler.bind(this);
        this.changeInvestmentAmountHandler = this.changeInvestmentAmountHandler.bind(this);
        this.changeInvestmentInvestorIdHandler = this.changeInvestmentInvestorIdHandler.bind(this);
        this.changenoOfStocksHandler = this.changenoOfStocksHandler.bind(this);
        this.buyStock = this.buyStock.bind(this);

    }
    buyStock = (e) => {
        console.log("buy")
        e.preventDefault();
        let investment = {investmentId: this.state.investmentId, investmentCompanySymbol: this.state.investmentCompanySymbol, investmentCompanyName: this.state.investmentCompanyName
           , investmentAmount: this.state.investmentAmount , investmentInvestorId: this.state.investmentInvestorId
        ,noOfStocks: this.state.noOfStocks };
        console.log('investment => ' + JSON.stringify(investment));

        InvestorService.buyStock(investment).then( res => {
            this.props.history.push('/Stock');
            console.log("service buy")
        });
    }
    changeInvestmentCompanySymbolHandler= (event) => {
        this.setState({investmentCompanySymbol: event.target.value});
    }

    changeInvestmentCompanyNameHandler= (event) => {
        this.setState({investmentCompanyName: event.target.value});
    }

    changeInvestmentAmountHandler= (event) => {
        this.setState({investmentAmount: event.target.value});
    }
    changeInvestmentInvestorIdHandler= (event) => {
        this.setState({investmentInvestorId: event.target.value});
    }
    changenoOfStocksHandler= (event) => {
        this.setState({noOfStocks: event.target.value});
    }

    cancel(){
        this.props.history.push('/Stock');
    }

         render() {
        return(
            <div>
                  <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Buy Stocks Menu</h3>
                            <div className = "card-body">

                            <form>
                                        <div className = "form-group">
                                            <label> Company Symbol </label>
                                            <input placeholder="Company Symbol" name="investmentCompanySymbol" className="form-control" 
                                                value={this.state.investmentCompanySymbol} onChange={this.changeInvestmentCompanySymbolHandler } />
                                        </div>
                                        <div className = "form-group">
                                            <label> Company Name </label>
                                            <input placeholder="Company Name" name="investmentCompanyName" className="form-control" 
                                                value={this.state.investmentCompanyName} onChange={this.changeInvestmentCompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Amount </label>
                                            <input placeholder="Amount" name="investmentAmount" className="form-control" 
                                                value={this.state.investmentAmount} onChange={this.changeInvestmentAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> investor ID </label>
                                            <input placeholder="investor Id" name="investmentInvestorId" className="form-control" 
                                                value={this.state.investmentInvestorId} onChange={this.changeInvestmentInvestorIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> No of stocks want to purchase </label>
                                            <input placeholder="no of stocks" name="noOfStocks" className="form-control" 
                                                value={this.state.noOfStocks} onChange={this.changenoOfStocksHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.buyStock}>Buy</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>

                            </div> 
                            </div>
                            </div>
                            </div>
            </div>
        )
    }
}

export default BuystockComponent
    