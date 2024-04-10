import React, { useState } from 'react';

//Here only TextBoxWithButton re-renders because state is defined in TextBoxWithButton component and not in main Task02 component
// For optimal performance, we should define state in lowest possible common ancestor so that rerender is minimized as that particular component only rerenders when that particular state changes
const TextBoxWithButton = () => {
  console.log(`textboxwithbutton component rerendered ${Math.random()}`);
  const [randomText, setRandomText] = useState('the number is 0');
  const updateRandomText = () => {
    setRandomText(`the new number is ${Math.random()}`);
  };
  return (
    <>
      <button onClick={updateRandomText}>Click to update random text</button>
      <div>{randomText}</div>
    </>
  );
};
const TextBox = ({ data }) => {
  return <div>{data}</div>;
};

const Task02 = () => {
  console.log(`Task02 rerendered ${Math.random()}`);
  return (
    <>
      <TextBoxWithButton />
      <TextBox data={'This is constant text'} />
    </>
  );
};

export default Task02;
