import React from 'react'
import './switch-styles.css'

const Switch = ({ onChange, text }) => {
    return (
        <label htmlFor={text} className="switch">
            <input type="checkbox" id={text} name={text} onChange={onChange} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch