import React, { useState } from 'react';

// Here the parent and the 1st TextBox rerenders on click, as the state changes, but the rest of the TextBoxesdo not render as they dont have asny variabvle state associated with them
// This is achieved by memo hook

const TextBox = React.memo(({ data }) => {
  return <div>{data}</div>;
});

const Task03 = () => {
  console.log(`Task03 rerendered ${Math.random()}`);
  const [randomText, setRandomText] = useState('the number is 0');
  const updateRandomText = () => {
    setRandomText(`the new number is ${Math.random()}`);
  };
  return (
    <div>
      <button onClick={updateRandomText}>Update Random text</button>
      <br />
      <br />
      <br />
      <TextBox data={randomText} />
      <br />
      <br />
      <br />
      <TextBox data={`This is constant text `} />
      <TextBox data={`This is constant text `} />
      <TextBox data={`This is constant text `} />
      <TextBox data={`This is constant text `} />
      <TextBox data={`This is constant text `} />
      <TextBox data={`This is constant text `} />
    </div>
  );
};

export default Task03;
