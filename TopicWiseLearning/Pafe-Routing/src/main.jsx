import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
 
// First method 

// const router = createBrowserRouter([
  //   {
    //     path:'/',
    //     element:<Layout/>,
    //     children:[{
      //    path:'',
      //    element:<Home/>
      //     },{
        //     path:'about',
        //     element:<About/>
        //     },{
          //       path:'contact',
          //       element:<Contact/>
          //     }]
          //   }
          // ])



          
          // second method 
          const router = createBrowserRouter(
            createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        
      <Route path='' element={<Home/>}/> 
      <Route path='/about' element={<About/>}>

      <Route path='user/:userId' element={<User/>}/> 
      </Route> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/github' element={<Github/>}/> 

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
