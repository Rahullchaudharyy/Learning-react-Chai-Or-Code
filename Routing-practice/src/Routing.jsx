import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
const Routing = () => {
  return (
  <div className='bg-zinc-800'>
   <Header/>
   <Outlet/>
  </div>
  )
}

export default Routing