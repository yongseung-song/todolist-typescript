import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { Todo } from '../App';

interface Props {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  // setTodos:(callback:(prev:Todo[]) => Todo[]) => void
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

  const onSubmitBtnClickHandler = () => {
    const newTodo: Todo = {
      title,
      content,
      isDone: false,
      id: uuid(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  return (
    <div>
      <StForm action="">
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
      </StForm>
      <StButton onClick={onSubmitBtnClickHandler}>submit</StButton>
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
