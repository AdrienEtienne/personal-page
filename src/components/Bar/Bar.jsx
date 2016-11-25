import React from 'react'
import './Bar.scss'

export const Bar = (props) => (
  <div className="Bar">
      <img alt={props.image_alt} className='logo' src={props.image}/>
      <div className={props.image?'text-margin':''}>{props.text}</div>
    </div>
)

export default Bar
