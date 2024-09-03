import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-bottom: 100px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 304px;
  height: 462px;
  gap: 27px;
  position: relative;
  background: ${({ theme }) => theme.COLORS.DARK_DARK_200};
  

  .heart-icon {
    & svg {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 8px;
      right: 8px;

      @media (max-width: 480px) {
        top: 20px;
        right: -242px;
        z-index: 1;
      }
    }
  }
`

export const FoodImage = styled.image``

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

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

export const AddToCart = styled.div`
  padding-bottom: 77px;
`

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
