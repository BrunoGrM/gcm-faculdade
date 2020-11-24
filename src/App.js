import React, { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Form from './components/Form/Form'

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
    const [textoBotao, setTextoBotao] = useState('Adicionar')

    const editarAluno = (aluno) => {
        setTextoBotao('Editar')
        setNome(aluno.nome)
        setCurso(aluno.curso)
        setPeriodo(aluno.periodo)
    }

    const deletarAluno = (id) => {
        const listaFiltrada = alunos.filter(aluno => aluno.id !== id)
        setAlunos(listaFiltrada)
    }
    
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
        setTextoBotao('Adicionar')
    }
    return (
        <>
        <Form>
            <Input 
                type="text" 
                name="nome" 
                value={nome} 
                required 
                onChange={e => setNome(e.target.value)} 
                placeholder="Nome" 
            />
            <Input 
                type="text" 
                name="curso" 
                value={curso} 
                required 
                onChange={e => setCurso(e.target.value)} 
                placeholder="Curso"
            />
            <Input 
                type="text" 
                name="periodo" 
                value={periodo} 
                required 
                onChange={e => setPeriodo(e.target.value)} 
                placeholder="Período"
            />
            <Button onClick={adicionarAluno} text={textoBotao} type='button' />
        </Form>

        <h1>Alunos:</h1>
            <h3 onClick={() => setAlunos(matriculados)} style={{cursor:'pointer'}}>Resetar</h3>
        {alunos.map((aluno, index) => (
            <fieldset key={index}>
                <div className="container-aluno">
                    <div>
                        <label>Id: {aluno.id}</label><br />
                        <label>Nome: {aluno.nome}</label><br />
                        <label>Curso: {aluno.curso}</label><br />
                        <label>Período: {aluno.periodo}</label><br/>
                    </div>
                </div>
                <label onClick={() => editarAluno(aluno)} className="editar">- Editar</label><br/>
                <label onClick={() => deletarAluno(aluno.id)} style={{color:'#c21d1d', float:'right', cursor:'pointer'}}>X Deletar</label>
            </fieldset>
        ))}
        </>
    )
}

export default App;
