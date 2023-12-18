import useTodos from '../hooks/useTodos';
import CardList from './CardList';

function CardListContainer() {
  const { todos } = useTodos();

  console.log(todos);
  return (
    <div>
      <CardList isActive={true} />
      <CardList isActive={false} />
    </div>
  );
}

export default CardListContainer;
