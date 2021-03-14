import React, { useState } from "react";
import Button from "../Button";
import Display from "../Display";
import * as S from "./styles";

const Calculator = () => {
  const [operation, setOperation] = useState(null);
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);
  const [last, setLast] = useState(0);

  const clearMemory = () => {
    setOperation(null);
    setValues([0, 0]);
    setCurrent(0);
    setLast(0);
  };

  const addOperation = (ope) => {
    if (!values[0]) return false;
    setOperation(ope);
    if (current === 0) {
      setCurrent(1);
    } else {
      try {
        if (values[0] && values[1]) {
          setValues((a) => {
            const newValue = [...a];
            newValue[0] = doOperation(operation);
            newValue[1] = "";
            return newValue;
          });
        }
      } catch (e) {
        setValues((a) => {
          const newValue = [...a];
          newValue[0] = 0;
          newValue[1] = "";
          return newValue;
        });
      }
    }
  };

  const doOperation = (o) => {
    let result = "";
    switch (o) {
      case "-":
        result = (parseFloat(values[0]) - parseFloat(values[1]))
          .toFixed(2)
          .replace(/[.,]00$/, "");
        setLast(`${values[0]} ${o} ${values[1]} = ${result}`);
        return result;
      case "+":
        result = (parseFloat(values[0]) + parseFloat(values[1]))
          .toFixed(2)
          .replace(/[.,]00$/, "");
        setLast(`${values[0]} ${o} ${values[1]} = ${result}`);
        return result;
      case "/":
        result = (parseFloat(values[0]) / parseFloat(values[1]))
          .toFixed(2)
          .replace(/[.,]00$/, "");
        setLast(`${values[0]} ${o} ${values[1]} = ${result}`);
        return result;
      case "*":
        result = (parseFloat(values[0]) * parseFloat(values[1]))
          .toFixed(2)
          .replace(/[.,]00$/, "");
        setLast(`${values[0]} ${o} ${values[1]} = ${result}`);
        return result;
      default:
        result = values[1];
        return result;
    }
  };

  const addDigit = (n) => {
    if (values[current].length > 9) return false;
    if (n === "." && values[current] && values[current].includes(".")) {
      return false;
    }

    values[current] === 0 || values[current] === "0"
      ? setValues((a) => {
          const newValue = [...a];
          newValue[current] = n;
          return newValue;
        })
      : setValues((a) => {
          const newValue = [...a];
          newValue[current] = values[current] + n;
          return newValue;
        });
  };

  return (
    <>
      <S.CalculatorContainer>
        <Display last={last} values={values}></Display>
        <Button click={clearMemory} grid="triple" label="AC"></Button>
        <Button click={addOperation} operation label="/"></Button>
        <Button click={addDigit} label="7"></Button>
        <Button click={addDigit} label="8"></Button>
        <Button click={addDigit} label="9"></Button>
        <Button click={addOperation} operation label="*"></Button>
        <Button click={addDigit} label="4"></Button>
        <Button click={addDigit} label="5"></Button>
        <Button click={addDigit} label="6"></Button>
        <Button click={addOperation} operation label="-"></Button>
        <Button click={addDigit} label="1"></Button>
        <Button click={addDigit} label="2"></Button>
        <Button click={addDigit} label="3"></Button>
        <Button click={addOperation} operation label="+"></Button>
        <Button click={addDigit} grid="double" label="0"></Button>
        <Button click={addDigit} label="."></Button>
        <Button click={addOperation} operation label="="></Button>
      </S.CalculatorContainer>
    </>
  );
};

export default Calculator;
