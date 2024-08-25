import styled from 'styled-components'
import Dish from '../../assets/Dish.png'

import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1328px;
  padding: 20px;
  margin: 0 auto;

  .footer {
    grid-area: footer;
  }
`

export const FoodImage = styled.div`
  background-image: url(${Dish});
  background-position: center;
  background-size: cover;
  height: 264px;
  width: 264px;
  border-radius: 50%;

`

export const PageProduct = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: center;
    padding: 10px 16px;
    padding-bottom: 77px;
  }
`

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-size: 24px;
    font-weight: bold;
  }

  > svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }
`

export const CardProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
  }
`

export const CardProductDetails = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 8px;
  align-items: baseline;

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    text-align: center;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  }
`

export const QuantityControl = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 32px;

  Button {
    width: 188px;
    height: 40px;
    text-shadow: none;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
  }
`

export const CardTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center; /* Centraliza as tags */

  span {
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_200}; /* Fundo das tags */
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100}; /* Cor do texto */
    border-radius: 8px; /* Arredonda as tags */
  }
`
