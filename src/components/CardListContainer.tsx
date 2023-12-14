import { useEffect } from 'react';
import { Todo } from '../App';
import { useAppDisPatch } from '../hooks/rtkHooks';
import { setTodo } from '../redux/modules/todo.slice';
import CardList from './CardList';

function CardListContainer() {
  const dispatch = useAppDisPatch();
  useEffect(() => {
    const todosFromLocalStorage: Todo[] = JSON.parse(
      localStorage.getItem('todos') as string
    );
    if (todosFromLocalStorage) {
      dispatch(setTodo(todosFromLocalStorage));
    }
  }, []);

  return (
    <div>
      <CardList isActive={true} />
      <CardList isActive={false} />
    </div>
  );
}

export default CardListContainer;
