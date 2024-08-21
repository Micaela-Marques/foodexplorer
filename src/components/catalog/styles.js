import styled from 'styled-components'

export const Container = styled.div`
  width: 1122px;
  height: 529px;
  margin: auto;
  margin-top: 48px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-weight: 400;
  }

  > svg {
    width: 40px;
    height: 40px;

    width: 40px;
    height: 40px;
    position: relative;
    top: 63%;
    left: 1%;
  }
`

export const Section = styled.div`
  display: flex;
  gap: 25px;
`
