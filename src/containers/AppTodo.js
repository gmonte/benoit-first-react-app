import React, { useState } from 'react';
import Form from './Form'
import List from './List'

const App = () => {
  const [todoList, setTodoList] = useState([])

  const addTodo = todo => {
    setTodoList([...todoList, todo])
  }

  const removeTodo = index => {
    const newTodoList = todoList.filter((todo, todoIndex) => todoIndex !== index)
    setTodoList(newTodoList)
  }

  return (
    <div>
      <Form addTodo={addTodo} />
      <List list={todoList} removeTodo={removeTodo} />
    </div>
  );
};

export default App;