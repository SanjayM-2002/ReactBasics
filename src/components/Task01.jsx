import React, { useState } from 'react';

// Here entire Task01 component re-renders even though only 1st TextBox changes as state is defined in main component(parent)

const TextBox = ({ data }) => {
  return <div>{data}</div>;
};

const Task01 = () => {
  const [randomText, setRandomText] = useState('the number is 0');
  const updateText = () => {
    setRandomText(`the new number is ${Math.random()}`);
  };
  console.log('task 1 rendereded', Math.random());
  return (
    <>
      <button onClick={updateText}>Update Random text</button>
      <br />
      <br />
      <br />
      <TextBox data={randomText} />

      <TextBox data={'This is constant text'} />
    </>
  );
};

export default Task01;
