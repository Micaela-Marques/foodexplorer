import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 364px;
 
`;

export const Label = styled.label`
  font-weight: 500;
  color: #C4C4CC;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    pointer-events: none;
    color: #C4C4CC;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 16px;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.COLORS.DARK_DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_LIGHT_500};
  border: none;
  border-radius: 8px;
  font-size: 20px;
  appearance: none;
  outline: none;
  cursor: pointer;

`;
