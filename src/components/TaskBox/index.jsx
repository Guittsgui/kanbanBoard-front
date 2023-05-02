import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'
import{AiOutlineArrowLeft, AiOutlineArrowRight,AiOutlineEye } from 'react-icons/ai'

const TaskBox = ({task}) => {

    return <S.container>
        <S.colorBar>

        </S.colorBar>
        <S.body>
            <p> {task.title}</p>
        </S.body>
        <S.buttonsBar>
            <button>
                <CiCircleRemove size={25}/>
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