import React from "react";

const Todo = ({ order, name, status }) => {
  return (
    <div className="todo">
      <span className="order">{order}</span>
      <span className="name">Name : {name}</span>
      <span className="status">
        Status : {status === true ? "Done" : "Not Finish"}
      </span>
    </div>
  );
};

export default Todo;
