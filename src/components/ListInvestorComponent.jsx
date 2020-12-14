import React, { Component } from 'react'
import InvestorAdminService from '../services/InvestorAdminService'


class ListInvestorComponent extends Component {
    constructor(props) {
        
        super(props)

        this.state = {
                investors: []
        }

        this.addInvestor = this.addInvestor.bind(this);
        this.updateInvestor = this.updateInvestor.bind(this);
        this.deleteInvestor = this.deleteInvestor.bind(this);
    }


    deleteInvestor(investorId){
        InvestorAdminService.deleteInvestor(investorId).then( res => {
            this.setState({investors: this.state.investors.filter(investor => investor.investorId !== investorId)});
        });
    }
    deleteInvestor(investorId){
        const investors=this.state.investors.filter(investor => investor.investorId == investorId);
        this.setState({
            investors:investors
        })

    }
    
    viewInvestor(investorId){
        this.props.history.push(`/view-investor/${investorId}`);
    }

    updateInvestor(investorId){
        this.props.history.push(`/update-investor/${investorId}`);
    }

    componentDidMount(){
        InvestorAdminService.getInvestor().then((res) => {
            this.setState({ investors: res.data});
        });
    } 

    addInvestor(){
        this.props.history.push('/add-investor');
    }

    render() {
        return (
            
            <div>
                 <h2 className="text-center">Investors List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addInvestor}> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                        <thead class="thead-dark">
                                <tr>
                                <th>Id </th>
                                    <th>Name </th>
                                    <th>Pan Number</th>
                                    <th>Email</th>
                                    <th> Phone </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.investors.map(
                                        investor => 
                                        <tr key = {investor.investorId}>
                                               <td> { investor.investorId} </td>   
                                             <td> { investor.investorName} </td>   
                                             <td> {investor.investorPannum}</td>
                                             <td> {investor.investorEmail}</td>
                                             <td> {investor.investorPhone}</td>
                                             <td>
                                                 <button onClick={ () => this.updateInvestor(investor.investorId)} className="btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pen-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteInvestor(investor.investorId)} className="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewInvestor(investor.investorId)} className="btn btn-info"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg> </button>
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

export default ListInvestorComponent

