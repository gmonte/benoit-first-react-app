import React, { useState, useEffect } from 'react';
import HelloWorld from './components/HelloWorld'

function App() {
  const [name, setName] = useState('Benoit')
  const [title, setTitle] = useState('React')

  useEffect(() => {
    setTimeout(() => {
      setName('BENOIT META')
    }, 2000)
  }, [])

  return (
    <div>
      <HelloWorld name={name} />
      <HelloWorld name={`${ name } :D `} />
    </div>
  );
}

export default App;
