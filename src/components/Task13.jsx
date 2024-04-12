import React, { memo, useCallback, useState } from 'react';

const Task13 = () => {
  console.log(`Task13 rendered ${Math.random()}`);
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const logFunction = useCallback(() => {
    console.log(`log function ${Math.random()}`);
  }, []);
  return (
    <>
      <div>Task13</div>
      <ChildComponent inputFunction={logFunction} />
      <button onClick={addCount}>Count is: {count}</button>
    </>
  );
};
/*
Here even if we used memo, the child re-renders when count state changes.
because React doesnt know that the inputfunction used in previous render is same as inputfunction used in new render
because if we compare 2 same functions fun1() {}==fun2() {}, then Js would return false.
So we have to wrap logfunction inside useCallback
In the useCallback's dependency array, we can pass any state variable if we want to render the function again if that particular state variable changes
*/
const ChildComponent = memo(({ inputFunction }) => {
  console.log(`child rendered ${Math.random()}`);

  return (
    <>
      <div>Child component</div>
    </>
  );
});

export default Task13;
