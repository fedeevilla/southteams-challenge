import React from "react";
import styled from "styled-components/macro";
import logo from "../assets/southteams.png";

const TopBar = styled.div`
  height: 60px;
  width: 100%;
  background: #406eff;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const Layout = () => {
  return (
    <TopBar>
      <img src={logo} height={20} alt="SouthTeams" />
    </TopBar>
  );
};

export default Layout;
