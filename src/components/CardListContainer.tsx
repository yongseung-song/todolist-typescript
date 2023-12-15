import { useEffect } from 'react';
import { useAppSelector } from '../hooks/rtkHooks';
import useTodos from '../hooks/useTodos';
import { selectTodos } from '../redux/modules/todo.slice';
import CardList from './CardList';

function CardListContainer() {
  const { fetchTodos } = useTodos();
  const todos = useAppSelector(selectTodos);
  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <div>
      <CardList isActive={true} />
      <CardList isActive={false} />
    </div>
  );
}

export default CardListContainer;
