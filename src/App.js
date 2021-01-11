import React from "react";
import { Route, Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import Home from "./views/Home";
import About from "./views/About";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "./redux/uiActions";

function App() {
  const dispatch = useDispatch();
  const TOGGLE = useSelector((state) => state.toggleSidebar);

  const reduce = TOGGLE ? "reduce" : "";

  React.useEffect(() => {
    // console.log("App Mounted", TOGGLE);
  }, [TOGGLE]);

  return (
    <Layout className={TOGGLE ? "layout-show" : ""}>
      <Header className={TOGGLE ? "menu-reduce" : ""}>
        <NavBar reduce={TOGGLE} />
      </Header>
      <SidebarContainer
        show={TOGGLE}
        className={TOGGLE ? "sidebar-show" : "sidebar-close"}
      >
        <Backdrop show={TOGGLE} onClick={(ev) => dispatch(toggleSideBar())} />
        <SideBar />
      </SidebarContainer>

      <Main className={TOGGLE ? "main-reduce" : ""}>
        <PageLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </PageLayout>
      </Main>
    </Layout>
  );
}

const SlideOpen = keyframes`
0% {
  transform: translateX(-100%)
}
100% {
  transform: translateX(0%)
}
`;

const SlideClose = keyframes`
0% {
  transform: translateX(0%)
}
100% {
  transform: translateX(-100%);
}
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 3rem 1fr;
  }

  .sidebar-show {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    animation: ${SlideOpen} 0.5s;
    /* border: 5px solid red; */
    @media (min-width: 600px) {
      position: relative;
      z-index: 0;
      grid-area: 1 / 1 / 3 / 2;
    }
  }

  .sidebar-close {
    animation: ${SlideClose} 0.5s;
  }

  .menu-reduce {
    grid-area: 1 / 1 / 2 / 2;
    @media (min-width: 600px) {
      grid-area: 1 / 2 / 2 / 3;
    }
  }

  .main-reduce {
    grid-area: 2 / 1 / 3 / 2;
    @media (min-width: 600px) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
`;

const Backdrop = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  animation: none;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    display: none;
  }
`;

const SidebarContainer = styled.div``;

const Header = styled.header`
  grid-area: 1 / 1 / 2 / 3;
  width: 100%;
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  grid-area: 2 / 1 / 3 / 3;
`;

export default App;
