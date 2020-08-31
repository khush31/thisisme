import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation">
            <ul>
                <li><NavLink className="link" to="/" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Home</NavLink></li>
                <li><NavLink className="link" to="/s/personal" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Personal</NavLink></li>
                <li><NavLink className="link" to="/s/programming" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Programming</NavLink></li>
                <li><NavLink className="link" to="/s/technologies" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Technologies</NavLink></li>
                <li><NavLink className="link" to="/s/education" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Education</NavLink></li>
                <li><NavLink className="link" to="/s/job" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Job</NavLink></li>
                <li><NavLink className="link" to="/s/certificates" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Certificates</NavLink></li>
                <li><NavLink className="link" to="/s/social" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Social</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;