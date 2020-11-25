import React, {useEffect, useState} from 'react'
import Button from './Button/Button'
import Input from './Input/Input'
import Form from './Form/Form'

const HomeForm = ({alunos, setAlunos, editarAluno, setEditarAluno}) => {
    const novoForm = {
        id: null,
        nome: '', 
        curso: '', 
        periodo: ''
    }

    const [form, setForm] = useState(novoForm)

    useEffect(() => {
        if(!editarAluno) return
        setForm({
            id: editarAluno.id,
            nome: editarAluno.nome,
            curso: editarAluno.curso,
            periodo: editarAluno.periodo
        })
    }, [editarAluno])

    const adicionarEditarAluno = e => {
        e.preventDefault() 
        const novoAluno = {
            id: alunos.length>0 ? alunos.sort((a,b) => b.id-a.id)[0].id+1 : 1,
            nome: form.nome, 
            curso: form.curso, 
            periodo: form.periodo
        }

        if(editarAluno) {
            var alunosFiltrados = alunos.filter(aluno => aluno.id !== editarAluno.id)
            var alunosAdicionados = ([...alunosFiltrados, {...novoAluno, id: editarAluno.id}])
            setAlunos(alunosAdicionados)
        } else {
            setAlunos([...alunos, novoAluno])
        }

        setForm(novoForm)
        setEditarAluno(null)
    }

    return(
        <Form onSubmit={adicionarEditarAluno}>
            <Input 
                type="text" 
                name="nome" 
                value={form.nome} 
                required 
                onChange={e => setForm({...form, nome: e.target.value})} 
                placeholder="Nome" 
            />
            <Input 
                type="text" 
                name="curso" 
                value={form.curso} 
                required 
                onChange={e => setForm({...form, curso: e.target.value})} 
                placeholder="Curso"
            />
            <Input 
                type="text" 
                name="periodo" 
                value={form.periodo} 
                required 
                onChange={e => setForm({...form, periodo: e.target.value})} 
                placeholder="Período"
            />
            <Button text={editarAluno ? 'Editar' : 'Adicionar' } type='submit'/>
        </Form>
    )

}
export default HomeForm