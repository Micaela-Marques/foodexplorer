import styled from 'styled-components'
import Dish from '../../assets/Dish.png'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  min-height: 100vh;

  .footer {
    grid-area: footer;
  }

  .header {
    grid-area: header;
  }
`

export const Image = styled.div`
  background-image: url(${Dish});
  background-position: center;
  background-size: cover;
  height: 389px;
  width: 389px;
`

export const Main = styled.div`
  grid-area: content;
  display: flex;
  justify-content: space-evenly;

  > h1 {
    font-size: 40px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  > p {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    text-align: center;
  }
`

export const Card = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-size: 24px;
    font-weight: bold;
  }

  > svg {
    width: 32px;
    height: 32px;
    color: #ffffff;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }
`

export const CardInfo = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`

export const Section = styled.div`
  display: flex;
  gap: 33px;
  align-items: center;
  margin-top: 52px;

  Button {
    width: 162px;
    height: 40px;
    text-shadow: none;
    font-size: 14px;
    font-weight: 400;
  }
`

export const CardTag = styled.div`
  display: flex;
  gap: 20px;
`
