import React from "react";
import propTypes from "prop-types";

const TodosComp = ({ todos, deletTodo }) => {
  const TodoLists = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className="collection-item"
          key={todo.id}
          onClick={() => {
            deletTodo(todo.id);
          }}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <div className="center collection-item">You have no todo&apos;s left.</div>
  );
  return <div className="todos collection">{TodoLists}</div>;
};

TodosComp.propTypes = {
  todos: propTypes.array.isRequired,
  deletTodo: propTypes.func.isRequired,
};

export default TodosComp;
