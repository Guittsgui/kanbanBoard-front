import * as S from './style'
const Board = () => {

    return <S.container>
        <S.header>
            <div className="todo">
                <h2> To Do: </h2>
            </div>
            <div className="doing">
                <h2> Doing: </h2>
            </div>
            <div className="done">
                <h2> Done: </h2>
            </div>
        </S.header>
        <S.board>
            
        </S.board>
    </S.container>
}

export default Board