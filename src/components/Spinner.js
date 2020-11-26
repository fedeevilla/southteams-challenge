import React from "react";
import styled from "styled-components/macro";

const CustomSpinner = styled.div`
  margin: auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #406eff;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ ...props }) => {
  return <CustomSpinner {...props} />;
};

export default Spinner;
