import React, { useState } from 'react';

// React Basics

const Task00 = () => {
  const CustomButton = (props) => {
    const updateCount = () => {
      props.setCount(props.count + 1);
    };
    return (
      <>
        <button onClick={updateCount}>
          Custom button counter is: {props.count}
        </button>
      </>
    );
  };

  const Todo = (props) => {
    const addRandomTodo = () => {
      const newTodo = {
        title: 'bla',
        description: 'sdfvbhksfvbkshb',
        completed: false,
      };
      props.setTodos([...props.todos, newTodo]);
    };
    return (
      <>
        <div style={{ display: 'flex', gap: 10 }}>
          <h5>{props.title}</h5>
          <h5>{props.description}</h5>
          <h5>{props.completed ? 'Done' : 'Pending'}</h5>
          <button onClick={addRandomTodo}>Add random todo</button>
        </div>
      </>
    );
  };
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    { title: 'Gym', description: 'Go to gym at 7 am', completed: true },
    {
      title: 'Breakfast',
      description: 'Go to breakfast at 8 am',
      completed: false,
    },
    { title: 'DSA', description: 'Study at 9 am', completed: false },
  ]);

  const addCount = () => {
    setCount(count + 1);
    // console.log('count state is: ', count);
  };
  const decrementCount = () => {
    setCount(count - 1);
    // console.log('count state is: ', count);
  };
  return (
    <>
      <div>Count is: {count}</div>
      <div>
        <button onClick={addCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>
      <CustomButton count={count} setCount={setCount} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
      <div>{Math.random()}</div>

      {/* <Todo
        title={todos[1].title}
        description={todos[1].description}
        completed={todos[1].completed}
      /> */}
    </>
  );
};

export default Task00;
