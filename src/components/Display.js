import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DisplayContainer = styled.div`
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
    <DisplayContainer>
      <small>{last ? last : ""}</small>
      {values[1] ? (
        <span className={size1}>{values[1]}</span>
      ) : (
        <span className={size0}>{values[0]}</span>
      )}
    </DisplayContainer>
  );
};

export default Display;
