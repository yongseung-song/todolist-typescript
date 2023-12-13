import { Dispatch, SetStateAction } from 'react';
import { Todo as TodoType } from '../App';
import Todo from './Todo';

interface Props {
  isActive: boolean;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

function TodoList({ isActive, todos, setTodos }: Props) {
  return (
    <ul>
      <div>
        <h1>{isActive ? `working on` : `done!`}</h1>
        <ul>
          {todos
            .filter((item) => item.isDone === !isActive)
            .map((item) => (
              <li key={item.id}>
                <Todo key={item.id} todo={item} setTodos={setTodos} />
              </li>
            ))}
        </ul>
      </div>
    </ul>
  );
}

export default TodoList;
