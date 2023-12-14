import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../App';
import { RootState } from '../config/configStore';

interface TodoState {
  todos: Todo[];
  isDone: boolean;
}

const initialState: TodoState = {
  todos: [],
  isDone: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      const stringifiedTodos = JSON.stringify(state.todos);
      localStorage.setItem('todos', stringifiedTodos);
    },
    updateTodo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      const stringifiedTodos = JSON.stringify(state.todos);
      localStorage.setItem('todos', stringifiedTodos);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      const stringifiedTodos = JSON.stringify(state.todos);
      localStorage.setItem('todos', stringifiedTodos);
    },
  },
});

export const { setTodo, addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;
export default todoSlice.reducer;
