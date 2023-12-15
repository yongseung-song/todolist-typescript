import { useEffect } from 'react';
import useTodos from '../hooks/useTodos';
import CardList from './CardList';

function CardListContainer() {
  const { fetchTodos } = useTodos();
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <CardList isActive={true} />
      <CardList isActive={false} />
    </div>
  );
}

export default CardListContainer;
