import * as S from './style'
import {Link} from 'react-router-dom'
const NewTask = () => {

    function handleSubmit(e){
        e.preventDefault()
        alert('adicionou tarefa')
    }

    return <>
     <S.container>
        <h1> Adicionando New Task </h1>
        <input type="text" placeholder='Título da Tarefa: '/>
        <textarea placeholder='Descrição da tarefa:'/>
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