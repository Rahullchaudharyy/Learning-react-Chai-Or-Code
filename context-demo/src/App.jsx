// src/App.jsx
import React, { useState } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "./MyComponent";

function App() {
  const [text, setText] = useState("Hello, World!");
  const [componame,setComponame] = useState("")
  const [Secondcomponame,setSecondomponame] = useState("")

  return (
    <MyContext.Provider value={{ text, setText,componame,setComponame ,Secondcomponame,setSecondomponame}}>
      <div>
        <h1>Context API Example</h1>
        <MyComponent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
