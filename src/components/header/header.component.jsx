import React from 'react';
import { BrowserRouter as Router, Link, useHistory, Route } from 'react-router-dom';
import './header.styles.scss';

import Logo from '../../assets/mtn.png';
// import Home from '../../pages/homepage/homepage.component';
// import Dashboard from '../../pages/dashboard/dashboard.component';

const Header = ({ currentUser, hidden }) => {

    const history = useHistory();

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img className="logo" src={Logo} />
            </Link>
            <div className="options">

                <Link className="option" to="/store">
                    Store
                </Link>
                <Link className="option" to="/produts">
                    Product & Services
                </Link>
                <Link className="option" to="/help">
                    Help & Support
                </Link>

            </div>
        </div>
    )
}



export default Header;