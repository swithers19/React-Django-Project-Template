import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        console.log()
    
        return (
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink className="" to="/">Home</NavLink>
                            <NavLink to="/dest">Trip view</NavLink>
                            <a href='http://localhost:8000/users/login'>Login</a>
                            <a href='http://localhost:8000/users/logout'>Logout</a>
                        </div>
                    </div>


                </nav>
        );
    }
}

export default Nav;