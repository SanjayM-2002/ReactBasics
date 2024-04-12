import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Task01 from './components/Task01';
import Task02 from './components/Task02';
import Task03 from './components/Task03';
import Task04 from './components/Task04';
import Task05 from './components/Task05';
import Task06 from './components/Task06';
import Task07 from './components/Task07';
import Task00 from './components/Task00';
import Task08 from './components/Task08';
import Task09 from './components/Task09';
import Task10 from './components/Task10';
import Task11 from './components/Task11';
import Task12 from './components/Task12';
import Task13 from './components/Task13';

function App() {
  console.log('main app rerendered', Math.random());
  return (
    <>
      <div>Hello world {Math.random()}</div>
      {/* <Task00 /> */}
      {/* <Task01 /> */}
      {/* <Task02 /> */}
      {/* <Task03 /> */}
      {/* <Task04 /> */}
      {/* <Task05 /> */}
      {/* <Task06 /> */}
      {/* <Task07 /> */}
      {/* <Task08 /> */}
      {/* <Task09 /> */}
      {/* <Task10 /> */}
      {/* <Task11 /> */}
      {/* <Task12 /> */}
      <Task13 />
    </>
  );
}

export default App;
