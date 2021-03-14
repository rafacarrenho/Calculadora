import styled from "styled-components";

export const DisplayContainer = styled.div`
  grid-column: span 4;
  background-color: #0004;
  display: flex;
  color: white;
  padding: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  flex-direction: column;

  small {
    display: block;
    font-size: 0.8rem;
    flex: 1;
    opacity: 0.5;
  }

  span {
    font-size: 1.9rem;

    &.small {
      font-size: 1rem;
    }

    &.medium {
      font-size: 1.7rem;
    }
  }
`;
