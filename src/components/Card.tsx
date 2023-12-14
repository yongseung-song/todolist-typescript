import styled from 'styled-components';
import { Todo } from '../App';
import { useAppDisPatch } from '../hooks/rtkHooks';
import { deleteTodo, updateTodo } from '../redux/modules/todo.slice';

interface Props {
  todo: Todo;
}

function Card({ todo }: Props) {
  const dispatch = useAppDisPatch();
  const onToggleCompletedBtnClickHandler = (id: string) => {
    dispatch(updateTodo(id));
  };
  const onDeleteBtnClickHandler = (id: string) => {
    dispatch(deleteTodo(id));
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
