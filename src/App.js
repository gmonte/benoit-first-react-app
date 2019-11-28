import React from "react";
import AppTodo from "./containers/AppTodo";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppTodo />
    </Provider>
  );
};

export default App;
