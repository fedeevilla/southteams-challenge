import React from "react";
import styled from "styled-components/macro";

const CustomInputSearch = styled.input`
  width: 150px;
  padding: 10px;
  border: 1px solid #406eff;
  border-radius: 5px;
`;

const InputSearch = ({ ...props }) => {
  return <CustomInputSearch {...props} />;
};

export default InputSearch;
