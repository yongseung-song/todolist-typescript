import dayjs from 'dayjs';
import { FormEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { Todo } from '../App';
import { useAppDisPatch } from '../hooks/rtkHooks';
import useInput from '../hooks/useInput';
import { addTodo } from '../redux/modules/todo.slice';

const DEFAULT_TITLE = '오늘의 할 일';

function Form() {
  const [title, onTitleChangeHandler] = useInput(DEFAULT_TITLE);
  const [content, onContentChangeHandler] = useInput('');
  const dispatch = useAppDisPatch();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: uuid(),
      title,
      content,
      createdAt: dayjs().format('YYYY년 MM월 DD일 hh:mm'),
      isDone: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <form action="" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="">Title</label>
          <input
            autoFocus
            value={title}
            type="text"
            onChange={onTitleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Content</label>
          <input
            value={content}
            type="text"
            onChange={onContentChangeHandler}
          />
        </div>
      </form>
      <div>
        <button type="submit">추가</button>
      </div>
    </div>
  );
}

export default Form;
