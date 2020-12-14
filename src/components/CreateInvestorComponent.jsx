
import React, { Component } from 'react'
import InvestorAdminService from '../services/InvestorAdminService';

class CreateInvestorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
          
            investorName: '',
            investorPannum: '',
            investorEmail: '',
            investorPhone:''
        }

        this.changeInvestorNameHandler = this.changeInvestorNameHandler.bind(this);
        this.changeInvestorPannumHandler = this.changeInvestorPannumHandler.bind(this);
        this.changeInvestorEmailHandler = this.changeInvestorEmailHandler.bind(this);
        this.changeInvestorPhoneHandler = this.changeInvestorPhoneHandler.bind(this);
        this.saveInvestor = this.saveInvestor.bind(this);
    }

    saveInvestor = (e) => {
        e.preventDefault();
        let investor = {investorName: this.state.investorName, investorPannum:this.state.investorPannum, investorEmail: this.state.investorEmail, investorPhone: this.state.investorPhone};
        console.log('investor => ' + JSON.stringify(investor));
        
            InvestorAdminService.createInvestor(investor, this.state.investorId).then( res => {
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
                            <h3 className="text-center" >Add Investor</h3>
                                <div className = "card-body">
                                    <form>
                                   
                                        <div className = "form-group">
                                            <label> Investor Name: </label>
                                            <input placeholder="Investor Name" name="investorName" className="form-control" 
                                                value={this.state.investorName} onChange={this.changeInvestorNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Investor Pannum: </label>
                                            <input placeholder="Investor Pannum" name="investorPannum" className="form-control" 
                                                value={this.state.investorPannum} onChange={this.changeInvestorPannumHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="investorEmail" className="form-control" 
                                                value={this.state.investorEmail} onChange={this.changeInvestorEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone Number" name="investorPhone" className="form-control" 
                                                value={this.state.investorPhone} onChange={this.changeInvestorPhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveInvestor}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg></button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateInvestorComponent
