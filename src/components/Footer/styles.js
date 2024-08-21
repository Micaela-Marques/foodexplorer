import styled from 'styled-components'
import footerimage from '../../assets/imgfooter.png'

export const Container = styled.div`
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
`

export const ImgfootersContainer = styled.div`
  background: url(${footerimage}) no-repeat;
  background-size: contain;
  width: 196px;
  height: 30px;
`
