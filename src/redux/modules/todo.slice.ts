import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  isDone: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const { setTodo } = todoSlice.actions;
