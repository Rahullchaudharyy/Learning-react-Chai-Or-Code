import { useParams } from 'react-router-dom'

const User = () => {
    const {userId }= useParams()
  return (
    <div className='h-[20mvin] w-[20vmin] flex justify-center items-center bg-orange-300 rounded-lg mt-[2vmin] '>
        Hello: {userId}
    </div>
  )
}

export default User