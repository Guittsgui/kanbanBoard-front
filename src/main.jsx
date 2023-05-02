import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Board from './routes/Board/index.jsx'
import NewTask from './routes/NewTask/index.jsx'
import SeeOneTask from './routes/SeeOneTask/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Board/>
      },
      {
        path: "/addtask",
        element: <NewTask/>
      },
      {
        path: "/task/:id",
        element:<SeeOneTask/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
