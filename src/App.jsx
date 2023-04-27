import Board from './routes/Board'
import * as S from './style'
import {Outlet, Link} from 'react-router-dom'


function App() {

  return (
    <>
      <S.header>
        <h1> Kanban Board</h1>
      </S.header>
      <S.nav>
        <Link to="addtask"> Add new Task</Link>
      </S.nav>
      <Outlet/>
  
    </>
  )
}

export default App
