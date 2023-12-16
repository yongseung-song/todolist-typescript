import { Todo } from '../App';
import {
  addTodoThunk,
  deleteTodoThunk,
  fetchTodoThunk,
  updateTodoThunk,
} from '../redux/modules/todo.slice';
import { useAppDisPatch } from './rtkHooks';

export default function useTodos() {
  const dispatch = useAppDisPatch();

  const fetchTodos = () => {
    dispatch(fetchTodoThunk());
  };

  const addTodo = (todo: Todo) => {
    dispatch(addTodoThunk(todo));
  };

  const toggleCompleteTodo = (id: string) => {
    dispatch(updateTodoThunk(id));
  };

  const deleteTodo = (id: string) => {
    dispatch(deleteTodoThunk(id));
  };

  return { fetchTodos, addTodo, toggleCompleteTodo, deleteTodo };
}
