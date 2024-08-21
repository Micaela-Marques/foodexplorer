import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => (isNew ? 'transparent' : theme.COLORS.LIGHT_LIGHT_600)};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.LIGHT_LIGHT_500}` : 'none')};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
  }

  > input {
    display: flex;
    max-width: 118px;
    height: 32px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
    }
  }
`
