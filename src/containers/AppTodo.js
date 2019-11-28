import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Types } from "../store/ducks/todo";
// import { getTodoList } from "../services/resources/todo";
import Form from "./Form";
import List from "./List";

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  const todoList = useSelector(store => store.todo.data);
  const loading = useSelector(store => store.todo.loading);

  console.warn("store", store);

  // useEffect(() => {
  //   const getTodoListAsync = async () => {
  //     try {
  //       const serverTodoList = await getTodoList();
  //       setTodoList([...todoList, ...serverTodoList]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getTodoListAsync();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const addTodo = todo => {
    dispatch({
      type: Types.ADD_TODO,
      todo
    });
  };

  const removeTodo = id => {
    dispatch({
      type: Types.REMOVE_TODO,
      id
    });
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
