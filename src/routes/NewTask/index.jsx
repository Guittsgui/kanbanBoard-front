import * as S from './style'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../api'


const NewTask = () => {
    const data = {
        title: '',
        body: '',
        type: 'doing'
    }



    const [inputs, setInputs] = useState(data)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        if(!inputs.body || !inputs.title){
            return
        }
        const date = new Date()
        const task = {...inputs, date: date}
        await api.addNewTask(task)
        navigate("/")
    }
    function handleChange(e){
        const {name,value} = e.target
        setInputs((prev) =>{
            const newData = {...prev, [name]: value}
            return newData
        })
        
    }

    return <>
     <S.container>
        <h1> Adicionando New Task </h1>
        <input type="text" 
        placeholder='Título da Tarefa:' 
        value={inputs.title}
        onChange={handleChange}
        name="title"/>

        <textarea placeholder='Descrição da tarefa:' 
        value={inputs.body}
        onChange={handleChange}
        name="body"/>

        <button onClick={handleSubmit}>
            <p> Add Task</p>
        </button>
    </S.container>
    <S.back>
        <Link to="/">Voltar</Link>
    </S.back>
    
    </>
}

export default NewTask