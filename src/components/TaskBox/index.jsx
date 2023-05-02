import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'
import{AiOutlineArrowLeft, AiOutlineArrowRight,AiOutlineEye } from 'react-icons/ai'
import {api} from './../../api'
import {Link} from 'react-router-dom'

const TaskBox = ({task, rightArrow}) => {

    const changeRight = rightArrow
    const changeLeft = ''

    function removeTaskById(){
        api.removeTaskById(task.id)
    }

    function showTaskInfoById(){
        
    }

    return <S.container>
        <S.colorBar>
        </S.colorBar>

        <S.body>
            <p> {task.title}</p>
        </S.body>

        <S.buttonsBar>
            <button>
                <CiCircleRemove size={25} onClick={removeTaskById}/>
            </button>
            <button>
                <AiOutlineArrowLeft size={25} onClick={changeLeft}/>
            </button>
            <button>
                <AiOutlineArrowRight size={25} onClick={changeRight}/>
            </button>
            <Link to={`/task/${task.id}`}>
                <AiOutlineEye size={25}/>
            </Link>

        </S.buttonsBar>
    </S.container>
}

export default TaskBox