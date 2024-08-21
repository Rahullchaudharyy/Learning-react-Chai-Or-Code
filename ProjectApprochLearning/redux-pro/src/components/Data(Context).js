
import { createContext, useState } from 'react';

export const Data = createContext(()=>{
    const [Count, setCount] = useState(0)
    setCount((prev)=>prev+1 )
    console.log("This is the data that is pass by the help of the context api",{Count})
})

