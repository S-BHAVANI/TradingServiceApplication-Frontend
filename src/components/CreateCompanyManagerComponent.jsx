import React, { Component } from 'react'
import CompanyManagerAdminService from '../services/CompanyManagerAdminService';
import { register } from '../serviceWorker';



class CreateCompanyManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            companyManagerCompanyName: '',
            companyManagerEmail: '',
            companyManagerPhone:''
        }

        this.changeCompanyManagerCompanyNameHandler = this.changeCompanyManagerCompanyNameHandler.bind(this);
        this.changeCompanyManagerEmailHandler = this.changeCompanyManagerEmailHandler.bind(this);
        this.changeCompanyManagerPhoneHandler = this.changeCompanyManagerPhoneHandler.bind(this);
        this.saveCompanyManager = this.saveCompanyManager.bind(this);

    }
    saveCompanyManager = (e) => {
        e.preventDefault(); 
        let companymanager = {companyManagerCompanyName: this.state.companyManagerCompanyName, companyManagerEmail: this.state.companyManagerEmail, companyManagerPhone: this.state.companyManagerPhone};
        console.log('companymanager => ' + JSON.stringify(companymanager));

        CompanyManagerAdminService.createCompanyManager(companymanager).then( res => {
            this.props.history.push('/CompanyManager');
        });
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
                            <h3 className="text-center" >Add CompanyManager</h3>
                            <div className = "card-body">

                            <form>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="Company Name" name="companyManagerCompanyName" className="form-control" 
                                                value={this.state.companyManagerCompanyName} onChange={this.changeCompanyManagerCompanyNameHandler} ref={register({ required:true,})}   />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Id" name="companyManagerEmail" className="form-control" 
                                                value={this.state.companyManagerEmail} onChange={this.changeCompanyManagerEmailHandler } />
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone Number" name="companyManagerPhone" className="form-control" 
                                                value={this.state.companyManagerPhone} onChange={this.changeCompanyManagerPhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveCompanyManager}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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

export default CreateCompanyManagerComponent
    
    
    