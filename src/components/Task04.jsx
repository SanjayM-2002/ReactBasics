import React from 'react';
import { useState } from 'react';

// Basic Todo task

const Todo = ({ title, description }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
      <h4>{title}</h4>
      <h5>{description}</h5>
    </div>
  );
};

const Task04 = () => {
  console.log(`Task04 rerendered ${Math.random()}`);
  const [todos, setTodos] = useState([
    { id: 1, title: 'gym', description: 'go to gym' },
    { id: 2, title: 'breakfast', description: 'go to mess for breakfast' },
    { id: 3, title: 'dsa', description: 'study dsa' },
  ]);
  const [todoInput, setTodoInput] = useState({ title: '', description: '' });

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: todoInput.title,
      description: todoInput.description,
    };
    setTodos([...todos, newTodo]);
    setTodoInput({ title: '', description: '' });
  };
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <input
        type='text'
        placeholder='Title'
        value={todoInput.title}
        onChange={(e) => setTodoInput({ ...todoInput, title: e.target.value })}
      />
      <input
        type='text'
        placeholder='Description'
        value={todoInput.description}
        onChange={(e) =>
          setTodoInput({ ...todoInput, description: e.target.value })
        }
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default Task04;
