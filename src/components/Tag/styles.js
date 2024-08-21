import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  font-size: 14px;
  border-radius: 5px;
  font-weight: 400;
  min-width: 62px;
  max-width: 100%;
  height: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto;
  white-space: nowrap;
`
