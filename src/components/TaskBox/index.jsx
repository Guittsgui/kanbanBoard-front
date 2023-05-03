import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'
import{AiOutlineArrowLeft, AiOutlineArrowRight,AiOutlineEye } from 'react-icons/ai'
import {api} from './../../api'
import {Link} from 'react-router-dom'

const TaskBox = ({task, remove}) => {


   
    return <S.container>
        <S.colorBar>
        </S.colorBar>

        <S.body>
            <p> {task.title}</p>
        </S.body>

        <S.buttonsBar>
            <button>
                <CiCircleRemove size={25} onClick={()=>remove(task.id)}/>
            </button>
            <button>
                <AiOutlineArrowLeft size={25} />
            </button>
            <button>
                <AiOutlineArrowRight size={25} />
            </button>
            <Link to={`/task/${task.id}`}>
                <AiOutlineEye size={25}/>
            </Link>

        </S.buttonsBar>
    </S.container>
}

export default TaskBox