import React, { Component } from 'react'
import CompanyManagerAdminService from '../services/CompanyManagerAdminService';

class UpdateCompanyManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            companyManagerId: this.props.match.params.companyManagerId,
            companyManagerCompanyName: '',
            companyManagerEmail: '',
            companyManagerPhone:''
        }

        this.changeCompanyManagerCompanyNameHandler = this.changeCompanyManagerCompanyNameHandler.bind(this);
        this.changeCompanyManagerEmailHandler = this.changeCompanyManagerEmailHandler.bind(this);
       this.changeCompanyManagerPhoneHandler = this.changeCompanyManagerPhoneHandler.bind(this);
        this.updateCompanyManager = this.updateCompanyManager.bind(this);

    }
    componentDidMount(){
        CompanyManagerAdminService.getCompanyManagerById(this.state.companyManagerId).then( (res) =>{
            let companymanager = res.data;
            this.setState({companyManagerCompanyName: companymanager.companyManagerCompanyName,
                companyManagerEmail: companymanager.companyManagerEmail,
                companyManagerPhone: companymanager.companyManagerPhone
            });
        });
    }

    updateCompanyManager = (e) => {
        e.preventDefault();
        let companymanager = { companyManagerId:this.state.companyManagerId, companyManagerCompanyName: this.state.companyManagerCompanyName, companyManagerEmail: this.state.companyManagerEmail, companyManagerPhone: this.state.companyManagerPhone};
        console.log('companymanager => ' + JSON.stringify(companymanager));
        console.log('companyManagerId => ' + JSON.stringify(this.state.companyManagerId));

        CompanyManagerAdminService.updateCompanyManager(companymanager, this.state.companyManagerId).then( res =>{
            this.props.history.push('/CompanyManager');
            })
    }   

  
    changeCompanyManagerCompanyNameHandler= (event) => {
        this.setState({companyManagerCompanyName: event.target.value});
    }

    changeCompanyManagerEmailHandler= (event) => {
        this.setState({companyManagerEmail: event.target.value});
    }

    changeCompanyManagerPhoneHandler= (event) => {
        this.setState({companyManagerPhone: event.target.value});
    }

    cancel(){
        this.props.history.push('/CompanyManager');
    }

         render() {
        return(
            <div>
                  <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Update CompanyManager</h3>
                            <div className = "card-body">

                            <form>
                            <div className = "form-group">
                                            <label> Manager Id: </label>
                                            <input placeholder="Manager Id" name="companyManagerId" className="form-control" 
                                                value={this.state.companyManagerId} onChange={this.changeCompanyManagerIdHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="Company Name" name="companyManagerCompanyName" className="form-control" 
                                                value={this.state.companyManagerCompanyName} onChange={this.changeCompanyManagerCompanyNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Id" name="companyManagerEmail" className="form-control" 
                                                value={this.state.companyManagerEmail} onChange={this.changeCompanyManagerEmailHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone Number" name="companyManagerPhone" className="form-control" 
                                                value={this.state.companyManagerPhone} onChange={this.changeCompanyManagerPhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCompanyManager}>Save</button>
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

export default UpdateCompanyManagerComponent