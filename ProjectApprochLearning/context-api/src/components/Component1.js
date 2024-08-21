import React, { useContext } from 'react'
import { Data, Data2 } from '../App'
// Completely messup cause If we want to give the data like the multiple data then it can me not sufficient for us... 

const Component1 = () => {
    const Name = useContext(Data);
    const Age = useContext(Data2)
    return (
        // <Data.Consumer>
        //     {(Name) => {
        //         return (
        //             <Data2.Consumer>
        //              {(Age)=>{
        //                 return <h1>Hey i am {Name} And my age is {Age}</h1>
        //              }}
        //             </Data2.Consumer>
        //         )


        //     }}

        // </Data.Consumer>

        <h1 className='text-gray-700 text-[5vmin] font-bold'>my name is {Name} & I am {Age} years old.</h1>
    )
}

export default Component1