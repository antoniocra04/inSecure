import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from './Main';
import Aboutus from './Aboutus';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className='header'>
                    <div className="header__inner">
                        <div className="header__item">
                            <Link to='/' className="header__logo">in secure</Link>
                        </div>
                        <div className="header__item">
                            <Link to='/aboutus' className="header__link">About Us</Link>
                            <a href="https://github.com/antoniocra04/inSecure" className="header__btn">Source code</a>    
                        </div>    
                    </div>                
                </div>
                <Switch>
                    <Route path='/aboutus'>
                        <Aboutus></Aboutus>
                    </Route>
                    <Route path='/'>
                        <Main></Main>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
