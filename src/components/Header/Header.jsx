import React from 'react'
import ProfileImage from '../../assets/images/profile.jpg'
import './Header.scss'

const Header = () => (
  <div className='Header'>
    <div className='row'>
      <div className='col-md-5'>
        <div className='hvr-reveal'>
          <img src={ProfileImage} />
        </div>
      </div>
      <div className='col-md-7'>
        <h1>
          Adrien Etienne
          <small>
            <div>Freelance Fullstack developer.</div>
          </small>
        </h1>
        <div className='sub-title'>
          <div>Just looking for great things to code</div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
