import React, { useEffect, useState } from 'react';
const Todo = ({ title, description, completed }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
      <h4>{title}</h4>
      <h5>{description}</h5>
      <h4>{completed ? 'Done' : 'Pending'}</h4>
    </div>
  );
};
const Task09 = () => {
  const [todos, setTodos] = useState([]);
  // Here we will fetch new todos for each 5 seconds using setInterval

  useEffect(() => {
    setInterval(() => {
      const fetchTodos = async () => {
        const res = await fetch('https://sum-server.100xdevs.com/todos');
        const data = await res.json();
        console.log(
          `data from new fetch todos is:  ${Math.random()} ${data.todos}`
        );
        setTodos(data.todos);
      };
      fetchTodos();
    }, 5000);
  }, []);
  //   console.log(todos);

  return (
    <>
      <div>Task09</div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
      {todos.length === 0 && (
        <div>
          <h3>There are no todos</h3>
        </div>
      )}
    </>
  );
};

export default Task09;
