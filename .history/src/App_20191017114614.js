import React, { useState, useEffect } from 'react';
import HelloWorld from './components/HelloWorld'

function App() {
  const [name, setName] = useState('Benoit')
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setName('BENOIT META')
    }, 2000)
  }, [])
  
  useEffect(() => {
    setTitle(`${ name }: ${ title }`)
  }, [name, title])

  return (
    <div>
      <HelloWorld name={name} />
      <HelloWorld name={`${ title } :D `} />
    </div>
  );
}

export default App;
