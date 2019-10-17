import React, { useState, useEffect } from 'react';
import HelloWorld from './components/HelloWorld'

function App() {
  const [name, setName] = useState('Benoit')

  useEffect(() => {
    console.warn('rodei')
  }, [])

  return (
    <div>
      <HelloWorld name={name} />
      <HelloWorld />
    </div>
  );
}

export default App;
