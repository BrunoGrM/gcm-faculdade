import React, { useState } from 'react'
import Aluno from '../../components/Aluno'
import HomeForm from '../../components/HomeForm'
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

const Home = () => {

    const [alunos, setAlunos] = useState(matriculados)
    const [editarAluno, setEditarAluno] = useState(null)

    return (
        <>
            <HomeForm alunos={alunos} setAlunos={setAlunos} editarAluno={editarAluno} setEditarAluno={setEditarAluno}/>
            <h1>Alunos:</h1>
            <h3 onClick={() => setAlunos(matriculados)} style={{cursor:'pointer'}}>Resetar</h3>
            {
                alunos.length===0 && <span>Nenhum aluno matriculado</span> 
            }

            {
                alunos.sort((a,b) => b.id-a.id).map(aluno => <Aluno key={aluno.id} index={aluno.id} aluno={aluno} alunos={alunos} setAlunos={setAlunos} setEditarAluno={setEditarAluno}/>)
                
            }
        </>
    )
}



export default Home