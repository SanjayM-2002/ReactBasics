import React from 'react';
// Wrapper components task using components as props

const TextComponent = ({ text }) => {
  return (
    <>
      <div>{text}</div>
    </>
  );
};

const CardWrapper = ({ innerComponent }) => {
  return (
    <>
      <div
        style={{ border: '2px solid black', backgroundColor: 'navajowhite' }}
      >
        {innerComponent}
      </div>
    </>
  );
};

const Task05 = () => {
  return (
    <>
      <CardWrapper innerComponent={<TextComponent text={'hello'} />} />
    </>
  );
};

export default Task05;
