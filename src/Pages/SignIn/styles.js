import styled from 'styled-components'
import background from '../../assets/Logo.png'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;
  display: flex;
`
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19.1rem;
  margin: 0 auto;

  & Button {
    text-shadow: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    
    & Button {
      text-shadow: none;
    }
  }
`

export const Form = styled.form`
  padding: 4rem;
  border-radius: 0.93rem;
  margin: auto;
  margin-right: 6.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_700};

  input {
    border: solid 1px ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      border: none;
    }
  }

  > h1 {
    font-weight: 500;
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    text-decoration: none;
    color: inherit;

    > p {
      font-size: 1rem;
      font-weight: 500;
      color: inherit;
      text-decoration: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_400};

    > h1 {
      display: none;
    }
  }
`

export const Background = styled.div`
  background: url(${background}) no-repeat center center;
  width: 20.2rem;
  height: 3rem;
`
