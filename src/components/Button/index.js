import React from "react";
import * as S from "./styles";

const Button = (props) => {
  return (
    <S.Btn {...props} onClick={(e) => props.click && props.click(props.label)}>
      {props.label}
    </S.Btn>
  );
};

export default Button;
