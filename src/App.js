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
    const [nome, setNome] = useState('')
    const [curso, setCurso] = useState('')
    const [periodo, setPeriodo] = useState('')
    
    const adicionarAluno = () => {
        const newAluno = {
            id: alunos.length + 1,
            nome,
            curso,
            periodo
        }
        setAlunos([...alunos, newAluno])
        setNome('')
        setCurso('')
        setPeriodo('')
    }
    return (
        <>
        <form>
            <input 
                type="text" 
                name="nome" 
                value={nome} 
                required 
                onChange={e => setNome(e.target.value)} 
                placeholder="Nome" 
            />
            <input 
                type="text" 
                name="curso" 
                value={curso} 
                required 
                onChange={e => setCurso(e.target.value)} 
                placeholder="Curso"
            />
            <input 
                type="text" 
                name="periodo" 
                value={periodo} 
                required 
                onChange={e => setPeriodo(e.target.value)} 
                placeholder="Período"
            />
            <button onClick={adicionarAluno} type='button'> Adicionar </button>
        </form>

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
