import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  height: 3rem;
  width: 21.75rem;

  border: none;
  padding: 0 1rem;
  margin: ${({ margin }) => margin || '0'};
  border-radius: 0.6rem;
  font-weight: 500;


  &:disabled {
    opacity: 0.5;
  }

  > svg {
    width: 1.6rem;
    height: 1.3rem;
    position: relative;
    top: 0.3rem;
  }
`
