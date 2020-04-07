import React from 'react';
import './Navbar.css';
import { NavLink, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <ul>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                    <NavLink to="/bookbuffet">Book Buffet</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to="/search">Search</NavLink>
                    </li>
                </ul>
                
            </div>
        )
    }
}

export default withRouter(Navbar);