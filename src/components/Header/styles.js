import styled from 'styled-components'
import imgHeader from '../../assets/imgHeader.png'

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.COLORS.GRADIENTE_200} 0%,
    ${({ theme }) => theme.COLORS.GRADIENTE_SECUNDARY_COLOR_200} 100%
  );
  width: 1120px;
  height: 260px;

  display: flex;

  border-radius: 10px;
  margin: auto;
  margin-top: 164px;
`

export const ImgHeader = styled.div`
  background: url(${imgHeader}) no-repeat;
  min-width: 656px;
  height: 412px;
  position: relative;
  top: -138px;
  left: -68px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 40px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }
`
