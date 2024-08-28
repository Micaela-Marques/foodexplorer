import styled from 'styled-components';
import imgHeader from '../../assets/imgHeader.png';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  max-width: 376px;
  height: 120px;
  display: flex;
  align-items: center; 
  margin: 0 auto;
  margin-top: 44px;
  border-radius: 3px;

  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.COLORS.GRADIENTE_200} 0%,
    ${({ theme }) => theme.COLORS.GRADIENTE_SECUNDARY_COLOR_200} 100%
  );

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 680px;
        width: 100%;
        height: 190px;
        margin-top: 115px;
  }



  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 1120px;
    width: 100%;
    height: 260px;
    margin-top: 172px;

  }
  
`;

export const ImgHeader = styled.div`
  background: url(${imgHeader}) no-repeat;
  min-width: 226px;
    height: 149px;
    background-size: contain;
    margin-right: -44px;
    position: relative;
    left: -34px;
    top: -4px;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 395px;
        height: 415px;
        position: relative;
        left: -74px;
        top: 62px;
    }


    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 656px;
      height: 412px;
      position: relative;
      left: -104px;
      top: -62px;
    }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-weight: 700; 
    margin-bottom: 4px; 
  }

  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-weight: 500; 
    margin-bottom: 4px; 
    font-family: "Poppins", sans-serif;
  }

  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  }

  
  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    > h1 {
    font-size: 27px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-weight: 500; 
    margin-bottom: 4px; 
    font-family: "Poppins", sans-serif;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }

  }
`;
