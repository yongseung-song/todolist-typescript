import { Dispatch, SetStateAction } from 'react';
import { Todo as TodoType } from '../App';

interface Prop {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

function Todo({ todo, setTodos }: Prop) {
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone };
        return todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const onToggleCompleteBtnClickHandler = (id: string) => {
    toggleTodo(id);
  };

  const onDeleteBtnClickHandler = (id: string) => {
    deleteTodo(id);
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <div>
        <button onClick={() => onToggleCompleteBtnClickHandler(todo.id)}>
          {todo.isDone ? `취소` : `완료`}
        </button>
        <button onClick={() => onDeleteBtnClickHandler(todo.id)}>삭제</button>
      </div>
    </div>
  );
}

export default Todo;
