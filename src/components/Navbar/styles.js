import styled from 'styled-components'
import logoPage from '../../assets/logopage.png'
import logoAdmin from '../../assets/logoAdmin.png'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};
`

export const Main = styled.div`
  max-width: 1125px;
  margin: 0 auto;
  width: 100%;
  gap: 32px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    height: 114px;
    gap: 16px;
    padding: 56px 28px 24px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    height: 114px;
    gap: 16px;
    padding: 56px 28px 24px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};
  }
`

export const Menu = styled.div`
  display: none;

  & svg {
    width: 24px;
    height: 25px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: block;
    width: 24px;
    height: 25px;
  }
`

export const ImageLogo = styled.div`
  min-width: 197px;
  height: 30px;
  background: url(${logoPage}) no-repeat;
`

export const InputWrapper = styled.div`
  & .icon_search {
    position: absolute;
    top: 22px;
    left: 70px;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      position: absolute;
      top: 14px;
      left: 12px;
      color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
    }
  }

  .input-search {
    width: 581px;
    height: 48px;
    border: none;
    padding: 10px 0 10px 90px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
      padding: 10px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      max-width: 300px;
      padding: 0px 24px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
    max-width: 581px;

    .icon {
      display: none;
    }
  }
`

export const BtnOrders = styled.div`
  .btn-orders {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-width: 148px;
    width: 100%;
    width: 100%;
    height: 56px;

    & .icon {
      width: 32px;
      height: 32px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      background: none;
      width: 32px;
      height: 32px;
      min-width: auto;

      > .icon {
        display: block;
        height: 32px;
        width: 32px;
      }

      .button-text {
        display: none;
      }
      .icon {
        display: block;
        min-width: 32px;
        min-height: 32px;
      }
    }
  }
`

export const Logout = styled.div`
  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: none;
  }

  & .go-to-back{
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
  }
`

export const AdminLogo = styled.div`
  min-width: 197px;
  height: 39px;
  background: url(${logoAdmin}) no-repeat;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
    min-width: 197px;
    height: 39px;
    background: url(${logoAdmin}) no-repeat;
  }
`

