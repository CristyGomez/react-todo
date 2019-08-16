import React, { Component } from 'react';
import Todos from './Todo.js';
import AddTodo from './AddForm.js';

class App extends Component {
  state = {
    todos: [
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
 //completeTodo = (id) =>{
   //const todos = this.todo.getElementById('complete')(todo => {
     //return todo.id === id
   //});
   //todos.className = 'line-through hover:bg-blue-300 collecton-item text-xl bg-white shadow-lg p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm';
   
 //}

    //let hola = document.getElementById('complete')
    //hola.className = 'line-through bg-green-300 hover:bg-blue-300 collecton-item text-xl bg-white shadow-lg p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm';
  doneTodo = (id) => {
    let todos = this.state.todos.filter(todo=>{
      return todo.id === id
    });
    
      console.log(id);
      console.log(todos);
      //let done = todos.id.getElementById('complete');
      //console.log(done);
      let done = document.getElementById('complete')
      done.className = 'line-through bg-green-300 hover:bg-blue-300 collecton-item text-xl bg-white shadow-lg p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm';
  }
  render() {
    return (
      
      <div className="App h-screen" >
      <p className="font-bold text-teal-700 text-6xl text-center">PATITOH 2.0</p>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo} doneTodo={this.doneTodo}/>
      </div>
    ); 
  }
}

export default App;
