import styled from 'styled-components';
import { useAppSelector } from '../hooks/rtkHooks';
import { selectTodos } from '../redux/modules/todo.slice';
import Card from './Card';

interface Props {
  isActive: boolean;
}

function CardList({ isActive }: Props) {
  const todos = useAppSelector(selectTodos);

  return (
    <StCardListWrapper>
      <h1>{isActive ? `working...` : `done!`}</h1>
      <StCardCarousel>
        <ul>
          {todos
            .filter((todo) => todo.isDone === !isActive)
            .map((todo) => (
              <li>
                <Card key={todo.id} todo={todo} />
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
