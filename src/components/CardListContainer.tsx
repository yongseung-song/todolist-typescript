import CardList from './CardList';

function CardListContainer() {
  return (
    <div>
      <CardList isActive={true} />
      <CardList isActive={false} />
    </div>
  );
}

export default CardListContainer;
