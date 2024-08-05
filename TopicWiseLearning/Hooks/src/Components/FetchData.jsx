import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(error=>{
            console.log("Problem to fetch the data",error) 
            setLoading(false)
        }
           
        )
    },[])
    if(loading){
        return <div>Loading Please wait ...</div>
    }

  return (
    <div>
        <h1>Here is you data</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>

    </div>
  )
}

export default FetchData