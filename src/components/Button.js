import React from "react";
import styled from "styled-components/macro";

const CustomButton = styled.button`
  background: ${({ type }) =>
    type === "primary" ? "#406eff" : "gray"} !important;
  color: white;
  border-radius: 5px;
  border-color: transparent !important;
  padding: 10px;
`;

const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

export default Button;
