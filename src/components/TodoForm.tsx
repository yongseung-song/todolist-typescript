import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { Todo as TodoType } from '../App';

interface Props {
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
  // setTodos:(callback:(prev:TodoType[]) => TodoType[]) => void
}

function TodoForm({ setTodos }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTextValueChange = (
    e: ChangeEvent<HTMLInputElement>,
    mode: string
  ) => {
    const value = e.target.value;
    if (mode === 'title') {
      setTitle(value);
      console.log(value);
    } else if (mode === 'content') {
      setContent(value);
      console.log(value);
    }
  };

  const onSubmitBtnClickHandler = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: TodoType = {
      title,
      content,
      isDone: false,
      id: uuid(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <StForm action="" onSubmit={onSubmitBtnClickHandler}>
        <label htmlFor="">제목</label>
        <input
          value={title}
          type="text"
          onChange={(e) => onTextValueChange(e, 'title')}
        />
        <label htmlFor="">내용</label>
        <input
          value={content}
          type="text"
          onChange={(e) => onTextValueChange(e, 'content')}
        />
        <StButton>submit</StButton>
      </StForm>
    </div>
  );
}

export default TodoForm;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StButton = styled.button`
  width: 100px;
  margin: 1.5rem auto;
`;
