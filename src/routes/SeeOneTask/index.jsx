import * as S from './style'
import { Link , useParams} from 'react-router-dom'
import { useEffect , useState } from 'react'
import {api} from './../../api'


const SeeOneTask = () => {
    
    const {id} = useParams()
    const [task, setTask] = useState()
    const name = 'vodka'

    useEffect(()=>{
        async function loadTask(){
            const foundTask = await api.getTaskById(id)
            setTask(foundTask)
            console.log(foundTask)
        }     
        loadTask()
    },[])

    function handleRemove(){
        alert(task.title)
    }

    return <S.container>
        <S.colorbar/>
        <S.infoContainer>
            <h2> Title:</h2>
            <p>{task.id}</p>
            <h2> Description: </h2>
            <p></p>
            <h2> Date:</h2>
            <p></p>
        </S.infoContainer>
        <S.nav>
            <Link to="/"> Return </Link>
            <button onClick={handleRemove}> Remove</button>
        </S.nav>
    </S.container>

}

export default SeeOneTask