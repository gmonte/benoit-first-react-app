import { createActions, createReducer } from "reduxsauce";

export const { Types } = createActions({
  addTodo: ["todo"],
  removeTodo: ["id"]
});

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

const addTodo = (state = INITIAL_STATE, { todo }) => ({
  ...state,
  data: [...state.data, todo]
});

const removeTodo = (state = INITIAL_STATE, { id }) => ({
  ...state,
  data: state.data.filter(todo => todo.id !== id)
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.REMOVE_TODO]: removeTodo
});
