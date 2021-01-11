import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBar = () => {
  const TOGGLE = useSelector((state) => state.toggleSidebar);

  React.useEffect(() => {
    console.log("Side bar is currently", TOGGLE);
  }, [TOGGLE]);

  return (
    <SidebarContainer className={TOGGLE ? "show" : "hide"}>
      <MenuList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </MenuList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 60%;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background: lightcyan;

  @media (min-width: 600px) {
    width: 30%;
  }
`;

const MenuList = styled.ul`
  width: 100%;
  padding: 2rem;
  & li {
    padding: 1rem;
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      background: red;
    }
  }
`;

export default SideBar;
