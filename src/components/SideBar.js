import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../redux/uiActions";

const SideBar = () => {
  const dispatch = useDispatch();
  const TOGGLE = useSelector((state) => state.toggleSidebar);

  return (
    <>
      <Backdrop show={TOGGLE} onClick={(ev) => dispatch(toggleSideBar())} />
      <SidebarContainer show={TOGGLE}>
        <MenuList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
        </MenuList>
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  height: 100vh;
  width: 60%;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background: lightcyan;
  transform: ${(props) =>
    props.show ? "translateX(0%)" : "translateX(-100%)"};
  transition: all 0.3s ease-in-out;

  @media (min-width: 600px) {
    width: 30%;
    grid-area: 1 / 1 / 3 / 2;
    z-index: 0;
  }
`;

const Backdrop = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  width: 100%;
  padding: 2rem;
  & li {
    padding: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;

  &:hover {
    text-decoration: underline;
    transition: all 0.5s ease;
  }
`;

export default SideBar;
