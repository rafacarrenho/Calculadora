import styled, { css } from "styled-components";

export const Btn = styled.button`
  ${({ theme, grid, operation }) => css`
    background-color: ${operation
      ? theme.colors.primary
      : theme.colors.backgroundSecondary};
    color: ${operation ? theme.colors.white : theme.colors.text};
    border: none;
    font-size: 1.4rem;
    outline: 0;
    cursor: pointer;
    transition: 0.3s ease;

    grid-column: ${(grid === "double" && "span 2") ||
    (grid === "triple" && "span 3")};

    &:active,
    &:hover {
      background-color: ${operation
        ? theme.colors.primaryDark
        : theme.colors.backgroundSecondaryDark};
    }
  `}
`;
