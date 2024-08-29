import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_400};

  & .button-close {
    background-color: transparent;
    border: none;
    width: 30px;
    cursor: pointer;
  }

  & input {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 372px;
    width: 100%;
    height: 48px;
    border: none;
    padding: 0 45px;
  }

  & .icon_search {
    position: absolute;
    top: 22px;
    left: 28px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
  }

  & .SideMenu {
    display: flex;
    flex-direction: column;
    width: 428px;

    height: 965px;
    gap: 36px;
  }

  & .title {
    font-size: 21px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    font-family: 'Roboto', sans-serif;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    position: absolute;
    z-index: 1;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open='true'] {
      transform: translateX(0%);
    }

    & .SideMenu {
      max-width: 100vw;
    }
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 32px 24px;
  gap: 15px;
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_700};

  & svg {
    width: 18px;
    height: 18px;
    position: relative;
    top: 3px;
  }
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.COLORS.BLUE_200};
  font-size: 54px;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 28px 28px;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    border-bottom: 1px ridge ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};

    &[data-menu-active='true'] {
      background-color: ${({ theme }) => theme.COLORS.BLUE_200};
      color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    }
  }
`
