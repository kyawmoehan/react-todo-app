import React, { Component } from "react";
import TodosComp from "./Todos";
import AddTodo from "./AddTodo";
// import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, content: "study the web" },
        { id: 2, content: "play ml" },
      ],
    };
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  deletTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo&apos;s</h1>
        <TodosComp todos={this.state.todos} deletTodo={this.deletTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
