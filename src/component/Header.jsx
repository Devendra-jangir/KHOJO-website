import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import khojo from "../images/khojo.png"
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={khojo} alt="khojo" width={140}height={45}/>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 1.3rem 4.8rem;
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #FFFFFF;  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 34%;
    color: orange;
    font-size: 5rem;
  }
`;
export default Header;
