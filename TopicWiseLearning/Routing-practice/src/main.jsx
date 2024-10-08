import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Routing from './Routing.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<Routing/>,
    children:[
      {
        path:'/',
        element:<Home/>
          },{
        path:'/about',
        element:<About/>
          },{
        path:'/contact',
        element:<Contact/>
          }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
