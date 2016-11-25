import React, {PropTypes} from 'react'
import './ButtonCross.scss'

export const ButtonCross = (props) => (
    <div className="ButtonCross" onClick={props.toggle}>
        <div className={props.toggled
            ? 'toggled'
            : ''}>+</div>
    </div>
)

export default ButtonCross
