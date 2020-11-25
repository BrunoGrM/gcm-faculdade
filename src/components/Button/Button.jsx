import React from 'react'
import './button-styles.css'

const Button = ({text, type}) => {

    return (
        <button className='default-custom-button' type={type}>{text}</button>
    )
}

export default Button