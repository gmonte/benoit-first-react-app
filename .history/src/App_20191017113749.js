import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld'

function App() {
  const [name, setName] = useState('Benoit')

  return (
    <div>
      <HelloWorld name="name" />
      <HelloWorld />
    </div>
  );
}

export default App;
