import React from 'react'
import './inputimage-styles.css'

const InputImage = ({ image, onChange, index }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <label className="label-file" htmlFor={`selecao-arquivo-${index}`}>Selecionar um arquivo &#187;</label>
            <input type="file" id={`selecao-arquivo-${index}`} onChange={onChange} />
            {image && <img src={image} alt="imagem" style={{ maxWidth: '190px' }} />}
        </div>
    )
}

export default InputImage