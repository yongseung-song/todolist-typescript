import styled from 'styled-components';

function Header() {
  return <StHeader>TodoList - level 1</StHeader>;
}

export default Header;

const StHeader = styled.header`
  text-align: center;
  padding: 1.5rem;
`;
