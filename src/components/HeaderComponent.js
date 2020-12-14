import React, { Component } from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-info">
                    <div><NavLink activeclassName="active" exact to='/'  className="navbar-brand"><h4><img src="icon.png"></img>Trading Service Application</h4></NavLink></div>
                    <div><NavLink activeclassName="active" exact to='/'  className="navbar-brand"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>Home</NavLink></div>
                    <div><NavLink activeclassName="active" exact to="/CompanyManager" className="navbar-brand">Manager</NavLink></div>
                    <div><NavLink activeclassName="active" exact to="/Investor" className="navbar-brand">Investor</NavLink></div>
                    <div><NavLink activeclassName="active" exact to="/Stock" className="navbar-brand">Stock</NavLink></div>
                    
                    <div><NavLink activeclassName="active" exact to="/Stock" className="navbar-brand">User</NavLink></div>
                    <div><NavLink activeclassName="active" exact to="/watch" className="navbar-brand">WatchList</NavLink></div>
                    
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav"> 
                   </Navbar.Collapse>
                   <div><NavLink activeclassName="active" exact to="/Profile" className="navbar-brand"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg></NavLink></div>
                   <div><NavLink activeclassName="active" exact to="/signout" className="navbar-brand"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-bar-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
</svg></NavLink></div>
        
             </nav>
             </header>
            </div>
        )
    }
}

export default HeaderComponent
