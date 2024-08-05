import data from "./data";
import React, { useState } from "react";

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [EnableMulti, setEnableMulti] = useState(false);
  const [MulSelected, setMulSelected] = useState([]);

  function HandleSingleSelection(CurrentId) {
    setSelected(CurrentId === selected ? null : CurrentId);
  }

  function HandleMultipleSelection(CurrentId) {
    let updatedSelections = [...MulSelected];
    if (updatedSelections.includes(CurrentId)) {
      updatedSelections = updatedSelections.filter(id => id !== CurrentId);
    } else {
      updatedSelections.push(CurrentId);
    }
    setMulSelected(updatedSelections);
  }

  return (
    <div className="wrapper max-w-3xl mx-auto my-10 px-4 flex justify-center items-center flex-col">
      <button
        onClick={() => setEnableMulti(!EnableMulti)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {EnableMulti ? "Disable Multi-Selection" : "Enable Multi-Selection"}
      </button>

      <div className="accordion bg-white shadow-lg rounded-lg overflow-hidden">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className={`item border-b ${EnableMulti ? MulSelected.includes(item.id) : selected === item.id
                ? "bg-gray-100"
                : "bg-white"
                }`}
            >
              <div
                onClick={() => EnableMulti ? HandleMultipleSelection(item.id) : HandleSingleSelection(item.id)}
                className="title cursor-pointer flex justify-between items-center p-4 hover:bg-gray-200 transition-colors duration-300"
              >
                <h1 className="font-semibold text-lg">{item.question}</h1>
                <span className={`transform transition-transform duration-300 ${EnableMulti ? MulSelected.includes(item.id) : selected === item.id ? "rotate-45" : ""}`}>+</span>
              </div>
              {(EnableMulti ? MulSelected.includes(item.id) : selected === item.id) && (
                <div className="answer p-4 text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center p-4">There is no data</div>
        )}
      </div>
    </div>
  );
};

export default Index;
