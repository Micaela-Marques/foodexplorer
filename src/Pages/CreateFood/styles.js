import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 100px;
`

export const CreatedProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1120px;
  width: 100%;
  gap: 24px;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 1120px;
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

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 1120px;
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

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
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
  }

  & .ingredients-inputs {
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 8px;
    border-radius: 5px;
  }

  & .input-added-ingredient {
    max-width: 118px;
    width: 100%;
    outline: none;
  }

  & .input-new {
    max-width: 118px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};

    & ::placeholder {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 1120px;
    width: 100%;
    display: flex;

    & .content-ingredients-card {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    & .description-ingredients {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: center;
    }
    & .ingredients-inputs {
      display: flex;
      height: 48px;
      min-width: 837px;
      width: 100%;
    }
    & .price {
      max-width: 251px;
      width: 100%;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 1120px;
    width: 100%;
    display: flex;

    & .content-ingredients-card {
      display: flex;
      gap: 32px;
      align-items: center;
    }

    & .description-ingredients {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: center;
    }
    & .ingredients-inputs {
      display: flex;
      gap: 32px;
      width: 100%;
      width: 535px;
      height: 48px;
    }

    & .price {
      max-width: 251px;
      width: 90%;
    }
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
    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      max-width: 1120px;
      width: 100%;
    }
  }
`

export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  gap: 5px;

  & .delete {
    max-width: 160px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_DARK_800};
  }

  & Button {
    max-width: 364px;
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_100};
    cursor: pointer;
    text-shadow: none;
    border-radius: 5px;

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      max-width: 172px;
      width: 100%;

      & .delete {
        max-width: 135px;
        width: 100%;
      }
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: end;
    gap: 32px;
  }
`
