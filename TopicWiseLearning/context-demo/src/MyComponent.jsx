// src/MyComponent.jsx
import React, { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import NestedComponent from "./NestedComponent";

function MyComponent() {
  const { text, setText,componame,setComponame } = useContext(MyContext);


  useEffect(()=>{
    setComponame("MyComponent");
  },[setComponame])
  return (
    <div>
      <p>{componame}: {text}</p>
      <button onClick={() => setText("Text updated from MyComponent") }>
        Update Text
      </button>
      <NestedComponent />
    </div>
  );
}

export default MyComponent;
