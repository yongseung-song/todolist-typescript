import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Todo as TodoType } from '../App';
import Todo from './Todo';

interface Props {
  isActive: boolean;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

function TodoList({ isActive, todos, setTodos }: Props) {
  return (
    <StCarousel>
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
    </StCarousel>
  );
}

export default TodoList;

const StCarousel = styled.div`
  width: 100%;
  height: 300px;
  overflow: scroll;
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }
`;
