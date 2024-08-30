import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`

export const CardsWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => -props.currentIndex * 300}px);
  gap: 27px;
  overflow: hidden;

  @media (max-width: 768px) {
    transform: translateX(${(props) => -props.currentIndex * 200}px);
  }

  @media (max-width: 428px) {
    transform: translateX(${(props) => -props.currentIndex * 150}px); 
  }
`;

export const Card = styled.div`
  flex: 0 0 auto;
  width: 250px;
  height: 150px;
  background-color: #ccc;
  margin-right: 20px;

  @media (min-width: 768px) {
    max-width: 200px; 
    width: 100%;
    height: 120px; 
  }

  @media (max-width: 428px) {
    width: 150px; 
    height: 100px; 
    margin-right: 10px; 
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 20px' : 'right: 20px')};
  transform: translateY(-50%);

  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  background: none;

  & svg {
    width: 15px;
    height: 27px;
    transition: transform 0.2s;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  @media (max-width: 428px) {
    width: 12px;
    height: 24px;
  }
`
