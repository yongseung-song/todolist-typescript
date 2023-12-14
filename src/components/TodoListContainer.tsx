import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Todo as TodoType } from '../App';
import TodoList from './TodoList';

interface Props {
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

function TodoListContainer({ todos, setTodos }: Props) {
  const [doneTodos, undoneTodos] = todos.reduce<[TodoType[], TodoType[]]>(
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
