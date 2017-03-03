import React from 'react'
import './Footer.scss'
import { version } from '../../../package'
import Teckonaut from '../Teckonaut'

const Footer = (props) => (
  <div className='Footer'>
    <h1>
      <div>Copyright &copy; 2016 - <Teckonaut /></div>
      <small>Build {version}</small>
    </h1>
  </div>
)

export default Footer
