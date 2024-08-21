import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'content'
    'footer';
  min-height: 100vh;
  padding-bottom: 77px;

  label {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
    margin-bottom: 8px;
  }

  .header {
    grid-area: header;
  }

  .footer {
    grid-area: footer;
  }
`
export const Section = styled.div`
  border-radius: 8px;
  padding: 32px 0px;
  width: 1120px;
  margin: auto;

  > a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  > h1 {
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }
`

export const Main = styled.div`
  grid-area: content;
  padding-bottom: 40px;
`

export const Card = styled.div`
  grid-area: content;
  width: 1120px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const CardDetails = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  .title {
    width: 463px;
    height: 48px;
    border: none;
  }

  .category {
    width: 364px;
    height: 48px;
    border: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: -8px;

  > button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 229px;
    height: 48px;
    text-shadow: none;
    font-weight: 500;
    background: ${({ theme }) => theme.COLORS.DARK_DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};

    > svg {
      position: relative;
      top: 0px;
    }
  }
`

export const IngredientsCard = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  .test {
    display: flex;
    gap: 16px;
    align-items: center;
    min-width: 837px;
    height: 48px;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
    border-radius: 5px;
    padding: 0 8px;
    padding-top: 8px;
  }
  .tag1 {
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
  .tag2 {
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  label {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
    margin-bottom: 8px;
  }

  .ingredient {
    display: flex;
    flex-direction: column;
    margin-top: 7px;
  }

  .price {
    width: 251px;
    height: 48px;
    border: none;
  }
`

export const ButtonSubmit = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  left: 35%;

  .Submit {
    width: 172px;
    min-height: 48px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    font-weight: 500;
    border: none;
    font-size: 14px;
    text-shadow: none;
  }

  .delete {
    width: 135px;
    height: 48px;
    background: ${({ theme }) => theme.COLORS.DARK_DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }
`
