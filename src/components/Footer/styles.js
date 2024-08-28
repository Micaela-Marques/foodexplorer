import styled from 'styled-components'
import footerimage from '../../assets/imgfooter.png'
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};

  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 27px 29px;
  position: fixed;
  margin-top: 77px;

  p {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 9px;

  }
  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;

    p {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;

  }
  }
   
`;

export const ImgfootersContainer = styled.div`
  background: url(${footerimage}) no-repeat;
  background-size: contain;
  min-width: 142px;
  height: 18px;
  width: 100%;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    min-width: 186px;
  height: 30px;
  width: 100%;
  }
`
