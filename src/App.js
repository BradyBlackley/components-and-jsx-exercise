import React from 'react';
import Heading from './components/Heading'
import Numbers from './components/Numbers'
import Movies from './components/Movies'

function App() {
  return <div>
    <h1>Ramping Up on React</h1>
    <Heading text={"Hello World"}/>
    <Heading text={"Hello darkness"}/>
    <Heading text={"My old friend"}/>
    <Numbers min={5} max={10}/>
    <Movies />
  </div>
}

export default App;
