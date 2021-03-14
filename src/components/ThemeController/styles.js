import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: bold;
    position: fixed;
    top: 12px;
    right: 12px;
    color: ${theme.colors.text};
    user-select: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  `}
`;

export const Switch = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${theme.colors.darkMode};
      transition: 0.4s;
      border-radius: 34px;

      &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${theme.colors.reverseColorText};
        transition: 0.4s;
        border-radius: 50%;
      }
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }
  `}
`;
