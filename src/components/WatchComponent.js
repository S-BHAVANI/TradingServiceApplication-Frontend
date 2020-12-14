import React, { Component } from 'react'
class WatchComponent extends Component {
 constructor(props) {
     super(props)

    this.state = {investorId : ''};
    this.viewWatchlist = this.viewWatchlist.bind(this);     
 }
 valueChange = (e) => {
this.setState({
    investorId :  e.target.investorId
});
 }
 
 viewWatchlist(investorId){
     console.log("input")
    this.props.history.push(`/watch-List/${investorId}`);
 }


 render() {
    return(
        <div>
              <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center" >Watch List Menu</h3>
                        <div className = "card-body">

                        <form>
                                    <div className = "form-group">
                                        <label> Enter the investor Id </label>
                                        <input type = "number" placeholder="Investor Id" name="investorId" className="form-control" 
                                            value={this.state.investorId } onChange={this.valueChange } />

                                       </div>
                                       <button className="btn btn-primary" onClick={() => this.viewWatchlist(this.investorId)}> Enter </button>  </form>
</div>
</div>
</div>
</div>
</div>
    )
 }
}
export default WatchComponent