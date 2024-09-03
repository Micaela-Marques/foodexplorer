import styled from 'styled-components'

export const Container = styled.div`
  width: 304px;
  height: 462px;
  border-radius: 5px;
  display: flex;
  gap: 27px;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  display: flex;
  align-items: center;
  text-align: center;

  background: ${({ theme }) => theme.COLORS.DARK_DARK_200};

  .heart-icon {
    & svg {
      width: 24px;
      height: 22px;
      margin-right: -226px;
    }
  }
`

export const FoodImage = styled.image``

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  span {
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 32px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
    font-family: 'Roboto', sans-serif;
  }
`

export const AddToCart = styled.div``

export const FoodCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;

  Button {
    width: 92px;
    height: 48px;
    font-weight: 400;
    font-size: 14px;
  }
  & .number {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
  }
`
