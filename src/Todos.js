import React from "react";
import propTypes from "prop-types";

const TodosComp = ({ todos, deletTodo }) => {
  const TodoLists = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deletTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
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
};

export default TodosComp;
