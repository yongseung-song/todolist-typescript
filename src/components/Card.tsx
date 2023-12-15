import styled from 'styled-components';
import { Todo } from '../App';
import useTodos from '../hooks/useTodos';

interface Props {
  todo: Todo;
}

function Card({ todo }: Props) {
  const { toggleCompleteTodo, deleteTodo } = useTodos();
  const onToggleCompletedBtnClickHandler = (id: string) => {
    toggleCompleteTodo(id);
  };
  const onDeleteBtnClickHandler = (id: string) => {
    deleteTodo(id);
  };
  return (
    <StCardContainer>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <p>{todo.createdAt}</p>
      <StBtnContainer>
        <button onClick={() => onToggleCompletedBtnClickHandler(todo.id)}>
          {todo.isDone ? `취소` : `완료`}
        </button>
        <button onClick={() => onDeleteBtnClickHandler(todo.id)}>삭제</button>
      </StBtnContainer>
    </StCardContainer>
  );
}

export default Card;

const StCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 180px;
  background-color: magenta;
  padding: 0.75rem;
  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

const StBtnContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;
