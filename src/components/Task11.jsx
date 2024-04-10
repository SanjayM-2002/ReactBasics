import React, { useMemo, useState } from 'react';

const Task11 = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState();
  const incrementCount = () => {
    setCount(count + 1);
  };
  // If we dont use useMemo hook, the for sum will be calculated even if we change counter and re-render happens even though the input num does not change.
  // After using useMemo and passing num as dependency, the sum will be calculated only if input num changes
  let ans = useMemo(() => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    console.log(`calcuating sum ${Math.random()}`);
    return sum;
  }, [num]);
  return (
    <>
      <div>Task11</div>
      <input
        onChange={(e) => setNum(parseInt(e.target.value))}
        type='number'
        placeholder='Enter number'
      />
      <div>
        Sum from 1 to {num} is: {num && ans}
      </div>
      <button onClick={incrementCount}>Count is: {count}</button>
    </>
  );
};

export default Task11;
