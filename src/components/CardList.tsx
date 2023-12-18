import styled from 'styled-components';
import useTodos from '../hooks/useTodos';
import Card from './Card';

interface Props {
  isActive: boolean;
}

function CardList({ isActive }: Props) {
  const { todos } = useTodos();

  return (
    <StCardListWrapper>
      <h1>{isActive ? `working...` : `done!`}</h1>
      <StCardCarousel>
        <ul>
          {todos
            .filter((todo) => todo.isDone === !isActive)
            .map((item) => (
              <li key={item.id}>
                <Card key={item.id} todo={item} />
              </li>
            ))}
        </ul>
      </StCardCarousel>
    </StCardListWrapper>
  );
}

export default CardList;

const StCardListWrapper = styled.section`
  padding: 1.5rem;
  height: 220px;
  h1 {
    font-size: 2rem;
    font-weight: 900;
  }
`;
const StCardCarousel = styled.div`
  width: 100%;
  overflow: scroll;
  ul {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`;
