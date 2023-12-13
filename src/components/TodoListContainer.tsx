import { Dispatch, SetStateAction } from 'react';
import { Todo } from '../App';
import TodoList from './TodoList';

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function TodoListContainer({ todos, setTodos }: Props) {
  const [doneTodos, undoneTodos] = todos.reduce<[Todo[], Todo[]]>(
    (acc, todo) => {
      if (todo.isDone) acc[0].push(todo);
      else acc[1].push(todo);
      return acc;
    },
    [[], []]
  );

  return (
    <section>
      <TodoList isActive={true} todos={undoneTodos} setTodos={setTodos} />
      <TodoList isActive={false} todos={doneTodos} setTodos={setTodos} />
    </section>
  );
}

export default TodoListContainer;
