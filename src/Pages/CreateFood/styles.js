import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  padding-bottom: 100px;
`

export const CreatedProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  gap: 24px;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 1328px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`

export const GoBack = styled.div`
  display: flex;
  flex-direction: column;

  .link {
    display: flex;
    align-items: center;
  }

  & svg {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    width: 22px;
    height: 21px;
  }
  & span {
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  & h1 {
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }
`

export const CardDetails = styled.div`
  & input {
    max-width: 364px;
    width: 100%;
    height: 48px;
    border: none;
  }

  > .label-input {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 1328px;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 32px;

    & input {
      max-width: 463px;
      width: 100%;
      border: none;
    }

    & .category {
      max-width: 364px;
      width: 100%;
      border: none;
    }
  }
`

export const ButtonUpload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & button {
    max-width: 364px;
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_600};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  & .label-upload-button {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    & button {
      width: 229px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    & .label-upload-button {
      font-size: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
    }
  }
`

export const IngredientsCard = styled.div`
  max-width: 364px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_300};
  }

  & .price {
    height: 48px;
    border: none;
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      width: 251px;
  
    }
  }

  & .ingredient {
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 8px;
    border-radius: 5px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: flex;
      width: 837px;
  
    }
  }

  & .tag1 {
    max-width: 118px;
    width: 100%;
    outline: none;
  }

  & .tag2 {
    max-width: 118px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};

    & ::placeholder {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    max-width: 1328px;
    width: 100%;
  }
`
export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_400};
  & .textarea {
    display: flex;
    flex-direction: column;
    max-width: 364px;
    width: 100%;
  }
`

export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & Button {
    max-width: 364px;
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    cursor: pointer;
    text-shadow: none;
    border-radius: 5px;
  }
`
