import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./views/Home";
import About from "./views/About";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import PageLayout from "./components/PageLayout";
import { useSelector } from "react-redux";

function App() {
  const TOGGLE = useSelector((state) => state.toggleSidebar);

  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <SideBar />

      <Main show={TOGGLE}>
        <PageLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </PageLayout>
      </Main>
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 3rem 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: lightblue;
  outline: none;
  border: none;
`;

const Header = styled.header`
  grid-area: 1 / 1 / 2 / 3;

  @media (min-width: 600px) {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

const Main = styled.main`
  grid-area: 2 / 1 / 3 / 3;
  transition: all 0.2s ease;

  ${(props) => (props.show ? "grid-area: 2 / 2 / 3 / 3;" : "")}
`;

export default App;
