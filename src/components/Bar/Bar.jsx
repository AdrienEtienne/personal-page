import React, { PropTypes } from 'react'
import './Bar.scss'

const Bar = (props) => (
  <div className='Bar'>
    <img alt={props.image_alt} className='logo' src={props.image} />
    <div className={props.image ? 'text-margin' : ''}>{props.text}</div>
  </div>
)

Bar.propTypes = {
  image: PropTypes.string.isRequired,
  image_alt: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Bar
