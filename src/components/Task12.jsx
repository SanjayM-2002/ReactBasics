import React, { memo, useState } from 'react';

const Task12 = () => {
  console.log(`Task12 rendered ${Math.random()}`);
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Task12</div>
      <ChildComponent />
      <button onClick={addCount}>Count is: {count}</button>
    </>
  );
};
/* count state is defined in main Task12 component, which is parent of ChildComponent
So when count state changes, Childcomponent also rerenders; because when parent re-renders, child also re-renders 
To avoid this we should wrap Childcomponent with memo
*/
const ChildComponent = memo(() => {
  console.log(`child rendered ${Math.random()}`);
  return (
    <>
      <div>Child component</div>
    </>
  );
});

export default Task12;
