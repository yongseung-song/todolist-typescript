import { configureStore } from '@reduxjs/toolkit';
import todo from '../modules/todo.slice';

const store = configureStore({
  reducer: { todo },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
