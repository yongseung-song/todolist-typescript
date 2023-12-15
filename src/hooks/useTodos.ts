import { useDispatch } from 'react-redux';
import { Todo } from '../App';
import jsonServerInstance from '../api/api';
import {
  addTodo as addTodoSlice,
  deleteTodo as deleteTodoSlice,
  setTodo as setTodoSlice,
  updateTodo,
} from '../redux/modules/todo.slice';

export default function useTodos() {
  const dispatch = useDispatch();

  const fetchTodos = async () => {
    try {
      const response = await jsonServerInstance.get('/todos');
      dispatch(setTodoSlice(response.data as Todo[]));
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = (todo: Todo) => {
    dispatch(addTodoSlice(todo));
  };

  const toggleCompleteTodo = (id: string) => {
    dispatch(updateTodo(id));
  };

  const deleteTodo = (id: string) => {
    dispatch(deleteTodoSlice(id));
  };

  return { fetchTodos, addTodo, toggleCompleteTodo, deleteTodo };
}
