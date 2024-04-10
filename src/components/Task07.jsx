import React, { useEffect, useState } from 'react';
// useEffect demo using counter task

const Task07 = () => {
  console.log(`Task07 rendered ${Math.random()}`);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert(`counter value is: ${counter}`);
  }, [counter]);

  const clickButton = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div>Task07</div>
      <button onClick={clickButton}>Increase counter</button>
      <div>counter value is: {counter}</div>
    </>
  );
};

export default Task07;
