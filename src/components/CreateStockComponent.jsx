import React, { Component } from 'react'
import CompanyManagerService from '../services/CompanyManagerService';
// eslint-disable-next-line
import { register } from '../serviceWorker';

class CreateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
          //  companyId: this.props.match.params.companyId,
            companyName: '',
            stockPrice: '',
            stockQuantity: '',
            stockOrderType:''
        }
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeStockPriceHandler = this.changeStockPriceHandler.bind(this);
        this.changeStockQuantityHandler = this.changeStockQuantityHandler.bind(this);
        this.changeStockOrderTypeHandler = this.changeStockOrderTypeHandler.bind(this)
        this.saveStock = this.saveStock.bind(this);
    }

    // // step 3
    // componentDidMount(){

    //     // step 4
    //     if(this.state.companyId === '_add'){
    //         return
    //     }else{
    //         CompanyManagerService.getStockById(this.state.companyId).then( (res) =>{
    //             let stock = res.data;
    //             this.setState({companyName : stock.companyName,
    //                 stockPrice : stock.stockPrice,
    //                 stockQuantity : stock.stockQuantity,
    //                 stockOrderType : stock.stockOrderType
    //             });
    //         });
    //     }        
    // }
    saveStock = (e) => {
        e.preventDefault();
        let stock = {companyName: this.state.companyName, stockPrice: this.state.stockPrice, stockQuantity: this.state.stockQuantity, stockOrderType: this.state.stockOrderType};
        console.log('stock => ' + JSON.stringify(stock));
        CompanyManagerService.createStock(stock).then(res =>{
           // console.log(res);
            this.props.history.push('/stock');
        });
    }
        // step 5
    //     if(this.state.companyId=== '_add'){
    //         CompanyManagerService.createStock(stock).then(res =>{
    //             console.log(res);
    //             this.props.history.push('/stock');
    //         });
    //     }else{
    //         CompanyManagerService.updateStock(stock, this.state.companyId).then( res => {
    //             console.log(res);
    //             this.props.history.push('/stock');
    //         });
    //     }
    // }
    
    changeCompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changeStockPriceHandler= (event) => {
        this.setState({stockPrice: event.target.value});
    }

    changeStockQuantityHandler= (event) => {
        this.setState({stockQuantity: event.target.value});
    }

    changeStockOrderTypeHandler= (event) => {
        this.setState({stockOrderType: event.target.value});
    }

    cancel(){
        this.props.history.push('/stock');
    }

    // getTitle(){
    //     if(this.state.companyId === '_add'){
    //         return <h3 className="text-center">Add Stock</h3>
    //     }else{
    //         return <h3 className="text-center">Update Stock</h3>
    //     }
    // }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {/* {
                                    this.getTitle()
                                } */}
                                  <h3 className="text-center" >Add Stock</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="Company Name" name="companyName" className="form-control" 
                                                value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stock Price: </label>
                                            <input placeholder="Stock Price" name="stockPrice" className="form-control" 
                                                value={this.state.stockPrice} onChange={this.changeStockPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stock Quantity: </label>
                                            <input placeholder="Stock Quantity" name="stockQuantity" className="form-control" 
                                                value={this.state.stockQuantity} onChange={this.changeStockQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stock OrderType: </label>
                                            <input placeholder="Stock OrderType" name="stockOrderType" className="form-control" 
                                                value={this.state.stockOrderType} onChange={this.changeStockOrderTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveStock}>Save</button>
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

export default CreateStockComponent
