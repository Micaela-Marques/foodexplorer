import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
    width: 1120px;
    height: 204px;
    padding: 14px;
    border: none;
    border-radius: 5px;
  }
`
