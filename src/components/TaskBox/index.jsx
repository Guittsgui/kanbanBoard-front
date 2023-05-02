import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'
import{AiOutlineArrowLeft, AiOutlineArrowRight,AiOutlineEye } from 'react-icons/ai'
import {api} from './../../api'

const TaskBox = ({task}) => {

    function removeTaskById(){
        api.removeTaskById(task.id)
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
                <AiOutlineArrowLeft size={25}/>
            </button>
            <button>
                <AiOutlineArrowRight size={25}/>
            </button>
            <button>
                <AiOutlineEye size={25}/>
            </button>

        </S.buttonsBar>
    </S.container>
}

export default TaskBox