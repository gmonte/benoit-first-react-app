import React, { useState, useEffect } from "react";
import { getTodoList } from "../services/resources/todo";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTodoListAsync = async () => {
      try {
        const serverTodoList = await getTodoList();
        setTodoList([...todoList, ...serverTodoList]);
      } finally {
        setLoading(false);
      }
    };

    getTodoListAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = todo => {
    setTodoList([...todoList, todo]);
  };

  const removeTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <Form addTodo={addTodo} />
      {loading && <p>Carregando...</p>}
      <List list={todoList} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
