import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { Todo } from '../../App';
import jsonServerInstance from '../../api/api';
import { RootState } from '../config/configStore';

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: null | AxiosError;
}

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchTodoThunk = createAsyncThunk(
  'fetchTodoThunk',
  async (_, thunkAPI) => {
    try {
      const response = await jsonServerInstance.get('/todos');
      return response.data as Todo[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error as AxiosError);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  'addTodoThunk',
  async (todo: Todo, thunkAPI) => {
    try {
      const response = await jsonServerInstance.post('/todos', todo);
      return response.data as Todo;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as AxiosError);
    }
  }
);

export const updateTodoThunk = createAsyncThunk(
  'updateTodoThunk',
  async (id: string, thunkAPI) => {
    try {
      await jsonServerInstance.patch(`/todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as AxiosError);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  'deleteTodoThunk',
  async (id: string, thunkAPI) => {
    try {
      await jsonServerInstance.delete(`todos/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as AxiosError);
    }
  }
);

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
    updateTodo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        fetchTodoThunk.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.isLoading = false;
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodoThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchTodoThunk.rejected, (state, action) => {
        state.isError = true;
        if (action.payload instanceof AxiosError) {
          state.error = action.payload;
        }
      })
      .addCase(addTodoThunk.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodoThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(
        addTodoThunk.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isError = true;
          if (action.payload instanceof AxiosError) {
            state.error = action.payload;
          }
        }
      )
      .addCase(
        updateTodoThunk.fulfilled,
        (state, action: PayloadAction<string>) => {
          const index = state.todos.findIndex(
            (todo) => todo.id === action.payload
          );
          state.todos[index].isDone = !state.todos[index].isDone;
        }
      )
      .addCase(updateTodoThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(updateTodoThunk.rejected, (state, action) => {
        state.isError = true;
        if (action.payload instanceof AxiosError) {
          state.error = action.payload;
        }
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodoThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(deleteTodoThunk.rejected, (state, action) => {
        state.isError = true;
        if (action.payload instanceof AxiosError) {
          state.error = action.payload;
        }
      });
  },
});

export const { setTodo, addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;
export default todoSlice.reducer;
