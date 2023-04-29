import TaskBox from '../../components/TaskBox'
import * as S from './style'
const Board = () => {

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
                <TaskBox/>
            </div>
            <div className="doingTasks boxdiv">
                
            </div>
            <div className="doneTasks boxdiv">
                
            </div>
        </S.body>
    </S.container>
}

export default Board