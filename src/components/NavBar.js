import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu, FiChevronLeft, FiGithub } from "react-icons/fi";
import { toggleSideBar } from "../redux/uiActions";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isToggled, setToggled] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const [isTopPos, setTopPos] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(48);

  const TOGGLE = useSelector((state) => state.toggleSidebar);

  function handleScroll() {
    const currentPos = document.body.getBoundingClientRect().top;
    // console.log(currentPos);
    if (currentPos === 0) {
      setVisible(true);
      setTopPos(true);
    } else {
      setTopPos(false);
    }
    if (currentPos < prevScrollPos) {
      setVisible(false);
    }

    if (currentPos > prevScrollPos) {
      setVisible(true);
    }
    // setTopPos(false);
    setPrevScrollPos(currentPos);
  }

  const makeVisible = isVisible ? "active" : "hidden";
  const showScrolling = isTopPos ? "" : "scroll";
  const show = TOGGLE ? "bar-open" : "bar-close";

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isTopPos]);

  return (
    <Transition>
      <NavContainer className={`${makeVisible} ${showScrolling} ${show}`}>
        <Left>
          <MenuButton onClick={(ev) => dispatch(toggleSideBar())}>
            {!TOGGLE ? (
              <FiMenu size="1.5rem" />
            ) : (
              <FiChevronLeft size="1.5rem" />
            )}
          </MenuButton>
          <h6>Simple NavBar</h6>
        </Left>
        <Right href="https://github.com/g-thinh" target="_blank">
          <FiGithub size="1.5rem" />
        </Right>
      </NavContainer>
    </Transition>
  );
};

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 0.3s ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }

  .scroll {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }

  .bar-open {
    transition: all 0.3s ease-in;
    width: 100%;

    @media (min-width: 600px) {
      width: 70%;
    }
  }

  .bar-close {
    transition: all 0.5s ease-out;
    width: 100%;

    @media (min-width: 600px) {
      width: 100%;
    }
  }
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  height: 3rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffff;
`;

const MenuButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  margin-right: 2rem;
  &:hover {
    background: lightblue;
  }
`;

const Left = styled.div`
  flex: 9;
  display: flex;
  align-items: center;
`;
const Right = styled.a`
  flex: 1;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    color: lightblue;
  }

  &:visited {
    color: lightblue;
  }
`;

export default NavBar;
