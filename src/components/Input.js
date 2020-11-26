import React from "react";
import styled from "styled-components/macro";

const CustomInput = styled.input`
  margin: 10px;
  border: 1px solid #406eff;
  border-radius: 5px;
  padding: 10px;
`;

const Input = ({ ...props }) => {
  return <CustomInput {...props} />;
};

export default Input;
