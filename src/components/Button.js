import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  font-size: 1.4rem;
  outline: 0;
  cursor: pointer;

  ${(props) => props.grid === "double" && "grid-column: span 2;"}
  ${(props) => props.grid === "triple" && "grid-column: span 3;"}
    ${(props) =>
    props.operation ? "background-color: #2fca1c; color: white;" : ""}
    &:active {
    background-color: #ccc;
  }
`;

const Button = (props) => {
  return (
    <Btn {...props} onClick={(e) => props.click && props.click(props.label)}>
      {props.label}
    </Btn>
  );
};

export default Button;
