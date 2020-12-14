import React, { Component } from 'react'
import InvestorAdminService from '../services/InvestorAdminService';

class UpdateInvestorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2

            investorId: this.props.match.params.investorId,
            investorName: '',
            investorPannum: '',
            investorEmail:'',
            investorPhone:''
        }
        
        this.changeInvestorNameHandler = this.changeInvestorNameHandler.bind(this);
        this.changeInvestorPannumHandler = this.changeInvestorPannumHandler.bind(this);
        this.changeInvestorEmailHandler = this.changeInvestorEmailHandler.bind(this);
        this.changeInvestorPhoneHandler = this.changeInvestorPhoneHandler.bind(this);
        this.updateInvestor = this.updateInvestor.bind(this);
    }

    componentDidMount(){
       InvestorAdminService.getInvestorById(this.state.investorId).then( (res) =>{
            let investor = res.data;
            this.setState({

                investorName:investor.investorName,
                investorPannum:investor.investorPannum,
                investorEmail:investor.investorEmail,
                investorPhone:investor.investorPhone

            });
        });
    }

    updateInvestor = (e) => {
        e.preventDefault();
        let investor = { investorId:this.state.investorId, investorName: this.state.investorName, investorPannum:this.state.investorPannum, investorEmail: this.state.investorEmail, investorPhone: this.state.investorPhone};
        console.log('investor => ' + JSON.stringify(investor));
        console.log('investorId => ' + JSON.stringify(this.state.investorId));
        
        InvestorAdminService.updateInvestor(investor, this.state.investorId).then( res => {
            this.props.history.push('/Investor');
        });
    }
    

    changeInvestorNameHandler= (event) => {
        this.setState({investorName: event.target.value});
    }

    changeInvestorPannumHandler= (event) => {
        this.setState({investorPannum: event.target.value});
    }
    changeInvestorEmailHandler= (event) => {
        this.setState({investorEmail: event.target.value});
    }

    changeInvestorPhoneHandler= (event) => {
        this.setState({investorPhone: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/Investor');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Investor</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Investor Id: </label>
                                            <input placeholder="investor id" name="investorId" className="form-control" 
                                                value={this.state.investorId} onChange={this.changeInvestorIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Investor Name: </label>
                                            <input placeholder="investor name" name="investorName" className="form-control" 
                                                value={this.state.investorName} onChange={this.changeInvestorNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Investor Name: </label>
                                            <input placeholder="investor panum" name="investorPannum" className="form-control" 
                                                value={this.state.investorPannum} onChange={this.changeInvestorPannumHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="investorEmail" className="form-control" 
                                                value={this.state.investorEmail} onChange={this.changeInvestorEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone" name="investorPhone" className="form-control" 
                                                value={this.state.investorPhone} onChange={this.changeInvestorPhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateInvestor}>Save</button>
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

export default UpdateInvestorComponent

