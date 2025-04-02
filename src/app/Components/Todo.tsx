'use client'
import React, { useState, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'; // Import the bin icon


type Todo = {
    id: number,
    title: string,
    completed: boolean
  };


const Todo = () => {
    const [todo, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

      //fetching all the todos
      useEffect(() => {
        const FetchTodos = async ()=> {
          //getting the response from the api
          const res = await fetch('/api/todo');
          const data = await res.json();
    
          setTodos(data);
        };
        
        FetchTodos();
      },[]);

       //Ading Todos
  const addTodo = async () => {
    if (!newTodo.trim()) return;

    const res = await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ title: newTodo }),
    });

    const data = await res.json();
    setTodos([data, ...todo]);
    setNewTodo('');
  };

  //deleting the todos
  const Delete = async (id: number)=> {
    await fetch(`/api/todo/${id}`, {method: 'DELETE'});
    setTodos(todo.filter(todo => todo.id !== id));
  };


  //Updating the complete status of the todos
  const ToggleComplete = async (id: number, completed: boolean) => {
    const res = await fetch(`/api/todo/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({completed: !completed}),
    });

    const updated = await res.json();
    setTodos(todo.map(todo => (todo.id === id ? updated : todo)));
  };
    
    return (
        <>
            <div className="flex w-full max-w-4xl">
                      <input
                        className="border border-r-0 flex-grow py-4 px-4 rounded-l-2xl"
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') addTodo();
                        }}
                        placeholder="Write Anything and Hit Enter"
                      />
                      <button
                        onClick={addTodo}
                        className="bg-[#15F5BA] text-black px-12 py-4 rounded-r-2xl font-bold text-xl"
                      >
                        Add
                      </button>
                    </div>
            
                    {/* Render custom todos */}
                    <div className="mt-8 w-full max-w-4xl flex flex-col items-center">
                      {todo.map((todo) => (
                        <div
                          key={todo.id}
                          className={`border w-full py-4 px-4 rounded-2xl mb-4 shadow-md flex items-center ${
                            todo.completed ? 'bg-green-100' : 'bg-black'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => ToggleComplete(todo.id, todo.completed)}
                            className="mr-4 w-6 h-6"
                          />
                          <span
                            className={`flex-grow text-xl font-bold ${
                              todo.completed ? 'line-through text-gray-500' : ''
                            }`}
                          >
                            {todo.title}
                          </span>
                          <button
                            onClick={() => Delete(todo.id)}
                            className="text-[#15F5BA] px-4 py-2 rounded-2xl"
                          >
                            <FaTrash size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
        </>
    )
}

export default Todo