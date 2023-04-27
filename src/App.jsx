import * as S from './style'
import Board from './routes/Board'

function App() {

  return (
    <>
      <S.header>
        <h1> Kanban Board</h1>
      </S.header>
      <S.nav>
        <a href="#"> Add new Task</a>
      </S.nav>
      <Board/>
    </>
  )
}

export default App
