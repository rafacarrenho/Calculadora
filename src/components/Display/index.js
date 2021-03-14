import React, { useEffect, useState } from "react";
import * as S from "./styles";

const Display = ({ last, values }) => {
  const [size0, setSize0] = useState("");
  const [size1, setSize1] = useState("");

  useEffect(() => {
    if (values[1].length > 12) {
      setSize1("small");
    } else if (values[1].length > 9) {
      setSize1("medium");
    } else {
      setSize1("");
    }

    if (values[0].length > 12) {
      setSize0("small");
    } else if (values[0].length > 9) {
      setSize0("medium");
    } else {
      setSize0("");
    }
  }, [values]);

  return (
    <S.DisplayContainer>
      <small>{last ? last : ""}</small>
      {values[1] ? (
        <span className={size1}>{values[1]}</span>
      ) : (
        <span className={size0}>{values[0]}</span>
      )}
    </S.DisplayContainer>
  );
};

export default Display;
