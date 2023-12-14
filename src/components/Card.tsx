import styled from 'styled-components';

function Card() {
  return (
    <StCardContainer>
      <h3>엥</h3>
      <p>먼디</p>
      <StBtnContainer>
        <button>완료</button>
        <button>삭제</button>
      </StBtnContainer>
    </StCardContainer>
  );
}

export default Card;

const StCardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 180px;
  background-color: magenta;
  padding: 0.75rem;
  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

const StBtnContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;
