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
const Task08 = () => {
  const [todos, setTodos] = useState([]);
  // Here we will fetch new todos whenever the component is reloaded

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://sum-server.100xdevs.com/todos');
      const data = await res.json();
      console.log('data from fetch todos is: ', data);
      setTodos(data.todos);
    };
    fetchTodos();
  }, []);
  console.log(todos);

  return (
    <>
      <div>Task08</div>
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

export default Task08;
