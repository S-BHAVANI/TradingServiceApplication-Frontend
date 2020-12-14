import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import ListCompanyManagerComponent from './components/ListCompanyManagerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCompanyManagerComponent from './components/CreateCompanyManagerComponent';
import UpdateCompanyManagerComponent from './components/UpdateCompanyManagerComponent';
import ViewCompanyManagerComponent from './components/ViewCompanyManagerComponent';
import ListInvestorComponent from './components/ListInvestorComponent';
import ViewInvestorComponent from './components/ViewInvestorComponent';
import UpdateInvestorComponent from './components/UpdateInvestorComponent';
import CreateInvestorComponent from './components/CreateInvestorComponent';
import ListStockComponent from './components/ListStockComponent';
import CreateStockComponent from './components/CreateStockComponent';
import UpdateStockComponent from './components/UpdateStockComponent';
import ViewStockComponent from './components/ViewStockComponent';
import Home from './components/Home';
import Profile from './components/Profile';
import signout from './components/signout';
import StocklistComponent from './components/StocklistComponent';
import BuystockComponent from './components/BuystockComponent';
import WatchListComponent from './components/WatchListComponent';
import WatchComponent from './components/WatchComponent';

function App() { 
  return (
    <div>
        <Router>
              <HeaderComponent />
             
                <div className="container">
                    <Switch> 
                  
                    <Route path = "/" exact component = {Home}></Route>
                         <Route path = "/CompanyManager" component = {ListCompanyManagerComponent}></Route>
                         <Route path = "/view-companymanager/:companyManagerId" component = {ViewCompanyManagerComponent}></Route>
                         <Route path = "/add-companymanager" component = {CreateCompanyManagerComponent}></Route>
                         <Route path = "/update-companymanager/:companyManagerId" component = {UpdateCompanyManagerComponent}></Route>
                         <Route path = "/Profile" exact component = {Profile}></Route>
                         <Route path = "/signout" exact component = {signout}></Route>
                    </Switch>
                </div>    
                <div className="container">
                    <Switch> 
                         <Route path = "/Investor" component = {ListInvestorComponent}></Route>
                         <Route path = "/view-investor/:investorId" component = {ViewInvestorComponent}></Route>
                         <Route path = "/add-investor" component = {CreateInvestorComponent}></Route>
                         <Route path = "/update-investor/:investorId" component = {UpdateInvestorComponent}></Route>

                    </Switch>
                </div>    
                <div className="container">
                    <Switch> 
                     
                          <Route path = "/Stock" component = {ListStockComponent}></Route>
                          <Route path = "/add-stock/:companyId" component = {CreateStockComponent}></Route>
                          <Route path = "/view-stock/:companyId" component = {ViewStockComponent}></Route>
                          <Route path = "/update-stock/:companyId" component = {UpdateStockComponent}></Route>
                    </Switch>
                    <div className="container">
                    <Switch> 
                          <Route path = "/Stock" component = {StocklistComponent}></Route>
                          <Route path = "/buy-stock" component = {BuystockComponent}></Route>
                          <Route path = "/watch-List/:investorId" component = {WatchListComponent}></Route>
                          <Route path = "/view-stock/:companyId" component = {ViewStockComponent}></Route>
                          <Route path = "/watch" component = {WatchComponent}></Route>
                          

                    </Switch>
                </div>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
