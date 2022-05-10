import React, { useEffect, useState } from "react";
import Todo from "../component/Todo";

const Ex1 = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);

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
  return <div>
      {todo.map((a, index) =>(
          <Todo name={a.title}/>
      ))}
  </div>;
};

export default Ex1;
