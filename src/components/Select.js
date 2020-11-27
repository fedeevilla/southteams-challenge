import React from "react";
import styled from "styled-components/macro";

const CustomSelect = styled.select`
  width: 180px;
  padding: 10px;
  border: 1px solid #406eff;
  border-radius: 5px;
`;

const Select = ({ children, ...props }) => {
  return <CustomSelect {...props}>{children}</CustomSelect>;
};

export default Select;
