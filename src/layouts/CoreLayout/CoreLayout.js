import React from 'react'
import {IndexLink, Link} from 'react-router'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

/*
<div className="menu">
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    </div>
*/

export const CoreLayout = ({children}) => (
  <div>
    <Header/>
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
