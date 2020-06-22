import React, { Component } from "react";
import propTypes from "prop-types";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo</label>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: propTypes.func.isRequired,
};

export default AddTodo;
