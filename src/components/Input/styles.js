import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  position: relative;

  > label {
    font-weight: 500;
    font-size: 1rem;
  }

  > input {
    padding: 12px 14px;
    font-family: 'Roboto', sans-serif;

    border-radius: 5px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
    background: transparent;
  }

  > svg {
    left: 8em;
    top: 0.93em;
    width: 1.5em;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
  }
`
