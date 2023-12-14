import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
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
    <StSection>
      <TodoList isActive={true} todos={undoneTodos} setTodos={setTodos} />
      <TodoList isActive={false} todos={doneTodos} setTodos={setTodos} />
    </StSection>
  );
}

export default TodoListContainer;

const StSection = styled.section``;
