import styled from 'styled-components'

export const Container = styled.div`
  width: 304px;
  height: 462px;
  border-radius: 10px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 24px 0px 24px;
  text-align: center;

  background: ${({ theme }) => theme.COLORS.DARK_DARK_200};
  .heart-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 32px;
  }

  > h1 {
    font-size: 24px;
    font-weight: bold;

    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  p {
    font-size: 0.87rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`

export const Image = styled.div`
  background: url(/src/assets/food1.png) no-repeat center center;
`

export const FoodCardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  > Button {
    width: 92px;
    height: 48px;
  }

  > span {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
  }

  > svg {
    position: relative;
    top: 21%;
    left: 4%;
    transform: translate(-50%, -50%);
    fill: white;
    transition: fill 0.2s;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }
`
