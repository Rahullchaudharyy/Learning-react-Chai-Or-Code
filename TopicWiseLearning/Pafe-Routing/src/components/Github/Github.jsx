// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from 'react'

const Github = () => {
  const [Data, setData] = useState([])
    useEffect(() => {
      
        fetch('https://api.github.com/users/Rahullchaudharyy')
        .then(response=>response.json())
        .then(data=>{
            console.log(data.followers)
               setData(data.followers)
        })
    }, [])
    
  return (
    <div className=''>Github Followers : {Data}</div>
  )
}

export default Github