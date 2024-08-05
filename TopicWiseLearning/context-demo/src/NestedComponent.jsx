// src/NestedComponent.jsx
import React, { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";

function NestedComponent() {
  const { text, setText,Secondcomponame,setSecondomponame } = useContext(MyContext);
  useEffect(()=>{
  setSecondomponame('NestedComponent')
},[setSecondomponame])

  return (
    <div>

      <p>{Secondcomponame}: {text}</p>
      <button onClick={() => setText("Text updated from NestedComponent")}>
        Update Text
      </button>
    </div>
  );
}

export default NestedComponent;
