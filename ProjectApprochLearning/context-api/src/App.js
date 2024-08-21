
// Importing the createContext 
import { createContext } from 'react';
import './App.css';
import Component1 from './components/Component1';
// create the instance  
export const Data = createContext();
export const Data2 = createContext();

function App() {

  const Name = " Rahul chaudhary ";
  const Age = 18;


  return (
    //  . Wrap our component into Provider Component
    <Data.Provider value={Name}>
      <Data2.Provider value={Age}>

        <Component1 />

      </Data2.Provider>


    </Data.Provider>

  );
}

export default App;
