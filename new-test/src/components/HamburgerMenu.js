import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  width: 7rem;
  height: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  cursor: pointer;
`;

const NavBackground = styled.div`
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6.5rem;
  width: 6.5rem;
  position: fixed;
  z-index: 600;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  transition: transform 0.8s;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
`;
const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    ${(props) =>
      props.clicked ? "transform: rotate(135deg)" : "transform: rotate(0)"};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    ${(props) =>
      props.clicked ? "transform: rotate(-135deg)" : "transform: rotate(0)"};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
`;

const List = styled.ul`
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0%")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity: 0.8s;
`;

const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

const HamburgerMenu = () => {
  const [click, setClick] = useState(false);
  /* const [image, setImage] = useState(true); */

  const clickHandler = () => {
    setClick(!click);
    /* setImage(!image); */
  };
  return (
    <>
      <MenuLabel onClick={clickHandler} htmlFor="navi-toggle">
        <Icon clicked={click}>&nbsp; </Icon>
        {/* {image}
        {!image ? "X" : "Menu"} */}
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={clickHandler} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickHandler} to="/about">
              About
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickHandler} to="/portfolio">
              Portfolio
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickHandler} to="/blog">
              Blog
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={clickHandler} to="/contact">
              Contact
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
};

export default HamburgerMenu;
