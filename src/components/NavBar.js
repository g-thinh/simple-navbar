import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { toggleSideBar } from "../redux/uiActions";

const NavBar = ({ reduce }) => {
  const dispatch = useDispatch();
  const [isToggled, setToggled] = useState(true);
  const [isVisible, setVisible] = useState(true);
  const [isTopPos, setTopPos] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(48);

  const TOGGLE = useSelector((state) => state.toggleSideBar);

  function handleScroll() {
    const currentPos = document.body.getBoundingClientRect().top;
    console.log(currentPos);
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
  const show = reduce ? "reduce" : "";

  useEffect(() => {
    // console.log("Show SideBar", reduce);
    window.scrollTo({
      behavior: "smooth",
    });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isTopPos]);

  return (
    <Transition>
      <NavContainer className={`${makeVisible} ${showScrolling} ${show}`}>
        <MenuButton onClick={(ev) => dispatch(toggleSideBar())}>
          <FiMenu size="1.5rem" />
        </MenuButton>
        <h6>NavBar</h6>
      </NavContainer>
    </Transition>
  );
};

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
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

  .reduce {
    transition: all 200ms ease-in-out;
    width: 100%;

    @media (min-width: 600px) {
      width: 70%;
      right: 0;
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

export default NavBar;
