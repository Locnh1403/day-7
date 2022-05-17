import React, { useEffect, useState } from "react";

const Ex1 = () => {
  const [todo, setTodo] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const dataRes = await data.json();
      setTodo(dataRes);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(todo);
  return (
    <div>
      {todo && todo.map((a, index) => (
        <h4 key={index}>{a.title}</h4>
      ))}
      <button className="button" onClick={fetchData}>
        Show data
      </button>
    </div>
  );
};

export default Ex1;
