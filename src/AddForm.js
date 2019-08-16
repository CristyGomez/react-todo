import React, { Component } from 'react'; 

class AddTodo extends Component {
    state = {
        id: '',
        content: '',
        done: false
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        if (this.state.content.trim().length === 0) {
        alert('Debe ingresar un datos');
        return false; 
        } else {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.aumentar.bind(this)
        this.setState({
            content: '',
            done: false
        })
    }
    }
    constructor(props) {
        super(props)
        this.state = {
          contador:0
        }
      }
      
      aumentar() {
        this.setState({contador:this.state.contador+1})
      }
      decrementar() { 
        let contador = this.state.contador
        if(contador>0) {
          this.setState({contador:contador-1})
        }
      }
    render(){
        return (
            <div className="bg-gray-200 rounded-lg mx-auto p-3 max-w-sm h-auto">
            <div className="text-center">
                <form onSubmit={this.handleSubmit} >
                    <input autocomplete="off" type="textbox" onChange={this.handleChange} value={this.state.content} class="bg-gray-200 border-2 border-gray-600 p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500" id="inline-full-name" placeholder="New Task"></input>
                    <h3>{this.state.contador}</h3>
                </form>
                
            </div>
            </div>
        )
    }
}

export default AddTodo