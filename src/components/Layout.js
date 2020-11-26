import React from "react";
import styled from "styled-components/macro";

const TopBar = styled.div`
  height: 60px;
  width: 100%;
  background: #406eff;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const Title = styled.h4`
  color: white;
`;

const Layout = () => {
  return (
    <TopBar>
      <Title>SouthTeams Challenge</Title>
    </TopBar>
  );
};

export default Layout;
