import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div class="justify-around" className="hover:bg-blue-300 collecton-item text-xl bg-white shadow-lg p-4 rounded-lg mx-auto mt-4 h-auto w-full max-w-sm" key={todo.id}>
                    <span>{todo.content}</span>
                    <button class="mx-1 float-right bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full" onClick={() => {deleteTodo(todo.id)}}>
                    X
                    </button>
                    <button class="float-right bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-full ">
                    ✔
                    </button>
                    
                </div>

            )
        })
    ) : (
        <p className="text-center">Write Something</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos