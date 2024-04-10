import React from 'react';
// Wrapper components using components as children
const TextComponent = ({ text }) => {
  return (
    <>
      <div>{text}</div>
    </>
  );
};

const CardWrapper = ({ children }) => {
  console.log(children);
  return (
    <>
      <div
        style={{
          border: '2px solid black',
          backgroundColor: 'greenyellow',
          padding: 25,
        }}
      >
        {children}
      </div>
    </>
  );
};

const Task06 = () => {
  return (
    <>
      <CardWrapper>
        <TextComponent text={'lorem ipsun lhbfvlidfbvladf'} />
        <TextComponent text={'hi there'} />
        <CardWrapper>
          <TextComponent text={'hello world'} />
        </CardWrapper>
      </CardWrapper>
    </>
  );
};

export default Task06;
