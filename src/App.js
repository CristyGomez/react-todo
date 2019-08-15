import React, { Component } from 'react';
import Todos from './Todo.js';
import AddTodo from './AddForm.js';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'comprar harina'},
      {id: 2, content: 'comprar oro'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos, todo];
  this.setState({
    todos
  })
  }
  toggleComplete = (id) => {
    
  } 
  render() {
    return (
      
      <div className="App bg-gray-500 h-screen">
      <p className="font-bold text-yellow-500 text-6xl text-center">PATITOH 2.0</p>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
