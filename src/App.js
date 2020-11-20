import React, { useState } from 'react'
import './App.css'

const App = () => {
    const matriculados = [
        {
            id: 1,
            nome: 'Bruno',
            curso: 'Engenharia de Software',
            periodo: '8º'
        },
        {
            id: 2,
            nome: 'Maria',
            curso: 'Sistemas de Informação',
            periodo: '5º'
        },
        {
            id: 3,
            nome: 'João',
            curso: 'Gastronomia',
            periodo: '2º'
        },
        {
            id: 4,
            nome: 'Luciana',
            curso: 'Psicologia',
            periodo: '9º'
        },
        {
            id: 5,
            nome: 'Teste',
            curso: 'teste',
            periodo: '9º'
        }
    ]
    const [alunos, setAlunos] = useState(matriculados)
    return (
        <>
        <h1>Alunos:</h1>
            <h3 onClick={() => setAlunos(matriculados)} style={{cursor:'pointer'}}>Resetar</h3>
        {alunos.map((aluno, index) => (
            <fieldset>
                <div key={index}>
                    <label>Id: {aluno.id}</label><br />
                    <label>Nome: {aluno.nome}</label><br />
                    <label>Curso: {aluno.curso}</label><br />
                    <label>Período: {aluno.periodo}</label><br/>
                </div>
            </fieldset>
        ))}
        </>
    )
}

export default App;
