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
const Task10 = () => {
  // Here we will fetch the todo from given input id
  const [todo, setTodo] = useState({});
  const [todoId, setTodoId] = useState(null);
  const fetchTodo = async () => {
    const res = await fetch(
      `https://sum-server.100xdevs.com/todo?id=${todoId}`
    );
    const data = await res.json();
    console.log(`data from new fetch todos is:  ${Math.random()} ${data.todo}`);
    setTodo(data.todo);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (todoId) {
      fetchTodo();
    }
  };
  console.log(todo);

  return (
    <>
      <div>Task10</div>
      <div>
        <h3>Enter the Todo Id</h3>
        <input
          type='text'
          placeholder='Todo Id'
          onChange={(e) => setTodoId(e.target.value)}
          value={todoId}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {todo && (
        <Todo
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
        />
      )}
      {!todo && (
        <div>
          <h3>There is no todo</h3>
        </div>
      )}
    </>
  );
};

export default Task10;
