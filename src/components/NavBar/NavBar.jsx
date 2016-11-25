import React from 'react'
import {IndexLink, Link} from 'react-router'
import './NavBar.scss'

export const NavBar = ({children}) => (
    <div className="NavBar">
        <IndexLink to='/' activeClassName='route--active'>
            Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='route--active'>
            Counter
        </Link>
    </div>
)

export default NavBar
