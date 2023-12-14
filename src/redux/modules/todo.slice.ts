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
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodo, addTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;
export default todoSlice.reducer;
