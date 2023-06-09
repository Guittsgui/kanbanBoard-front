import TaskBox from '../../components/TaskBox'
import * as S from './style'
import { useEffect , useState } from 'react'
import { api } from '../../api'

const Board = () => {

    const [todoList, setTodoList] = useState([])
    const [doingList, setDoingList] = useState([])
    const [doneList, setDoneList] = useState([])


    useEffect(()=>{
        async function loadToDoTasks(){
            const list = await api.getTasksByTypes('todo')
            setTodoList(list)
        }      
        loadToDoTasks()
        /*async function loadDoingTasks(){
            const list = await api.getTasksByTypes('doing')
            setDoingList(list)
        }
        async function loadDoneTasks(){
            const list = await api.getTasksByTypes('done')
            setDoneList(list)
        } 
        //loadDoingTasks()
        //loadDoneTasks()*/
    },[]) 


    function changeTodoToDoing(){
    }
    function changeDoingToDone(){

    }
    function changeDoneToDoing(){

    }
    function changeDoingToTodo(){
    }
    function removeTaskByID(id){
        const newlist = todoList.filter((task)=> task.id != id )
        setTodoList(newlist)
        api.removeTaskById(id)
    }

    return <S.container>

        <S.nav>
            <div className="todoNav headerdivs">
                <h2> To Do:</h2>
            </div>

            <div className="doingNav headerdivs">
                <h2> Doing:</h2>
            </div>

            <div className="doneNav headerdivs">
                <h2> Done: </h2>
            </div>
        </S.nav>

        <S.body>
            <div className="todoTasks boxdiv"> 
                {todoList.map((task)=>(
                    <TaskBox key={task.id}
                     task={task}
                     remove={removeTaskByID}
                     rightArrow={changeTodoToDoing}/>
                ))}               
            </div>
            <div className="doingTasks boxdiv">
                {doingList.map((task)=>(
                    <TaskBox key={task.id} task={task}/>
                ))}
            </div>
            <div className="doneTasks boxdiv">
                {doneList.map((task)=>(
                    <TaskBox key={task.id} task={task}/>
                ))}              
            </div>
        </S.body>
    </S.container>
}

export default Board