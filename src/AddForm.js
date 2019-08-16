import React, { Component } from 'react'; 

class AddTodo extends Component {
    state = {
        content: '',
        completed: false
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        if (this.state.content.trim().length == 0) {
        alert('Debe ingresar un dato');
        return false; 
        } else {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: '',
            completed:false
        })
    }
    }
    render(){
        return (
            <div className="bg-gray-200 rounded-lg mx-auto p-3 max-w-sm h-auto">
            <div className="text-center">
                <form onSubmit={this.handleSubmit}>
                    <input autocomplete="off" type="textbox" onChange={this.handleChange} value={this.state.content} class="bg-gray-200 border-2 border-gray-600 p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" placeholder="New Task"></input>
                    
                </form>
                
            </div>
            </div>
        )
    }
}

export default AddTodo