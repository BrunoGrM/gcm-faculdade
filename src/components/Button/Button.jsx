import React from 'react'
import './button-styles.css'

const Button = ({text, type, onClick}) => {

    return (
        <button className="default-custom-button" onClick={onClick} type={type}>{text}</button>
    )
}

export default Button