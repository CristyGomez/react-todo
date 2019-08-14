import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render(){
        return (
            <div className="text-center">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} class="bg-gray-200 appearance-none border-2 border-gray-600 p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" type="text" placeholder="New Task"></input>
                </form>
                
            </div>
        )
    }
}

export default AddTodo