import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
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
            <StyledLink
              exact
              to="/"
              onClick={(ev) => dispatch(toggleSideBar())}
            >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink
              exact
              to="/about"
              onClick={(ev) => dispatch(toggleSideBar())}
            >
              About
            </StyledLink>
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
  width: 70%;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background: #ffff;
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
    display: flex;
    /* justify-content: center;
    align-items: center;
    flex-direction: column; */
  }
`;

const StyledLink = styled(NavLink).attrs({ activeClassName: "active" })`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 2rem;
  text-align: center;

  &:hover {
    background: lightblue;
    /* text-decoration: underline; */
    transition: all 0.5s ease;
  }

  &.active {
    font-weight: bolder;
    text-decoration: underline;
  }
`;

export default SideBar;
