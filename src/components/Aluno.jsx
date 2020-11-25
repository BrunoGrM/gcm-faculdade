import React, { useState } from 'react'
import InputImage from './InputImage/InputImage';

const Aluno = ({ index, aluno, alunos, setAlunos, setEditarAluno }) => {
    const [image, setImage] = useState(null);

    const deletarAluno = (id) => setAlunos(alunos.filter(aluno => aluno.id !== id))
    const editarAluno = (aluno) => setEditarAluno(aluno)

    const handleChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <fieldset>
            <div className="container-aluno">
                <div>
                    <label>Id: {aluno.id}</label><br />
                    <label>Nome: {aluno.nome}</label><br />
                    <label>Curso: {aluno.curso}</label><br />
                    <label>Período: {aluno.periodo}</label><br/>
                </div>
                <InputImage image={image} onChange={handleChange} index={index} />
            </div>
            <label onClick={() => editarAluno(aluno)} className="editar">- Editar</label><br/>
            <label onClick={() => deletarAluno(aluno.id)} style={{color:'#c21d1d', float:'right', cursor:'pointer'}}>X Deletar</label>
        </fieldset>
    )
}

export default Aluno