import styled from "styled-components";

export const CalculatorContainer = styled.div`
  height: 350px;
  width: 235px;
  border-radius: 5px;
  overflow: hiden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
  gap: 1px;
`;
