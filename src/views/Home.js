import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Title>
        Creating a Nav App Bar Component with a Responsive Grid Layout
      </Title>
      <Subtitle>
        Created by <b>Gia Thinh Nguyen</b>
      </Subtitle>

      <Card>
        <p>
          This demo was made to showcase how to build a persistent navigation
          bar using a CSS approach to the responsive grid layout design to with
          a sidebar drawer component that would change differently for mobile
          and non-mobile experiences.
        </p>
        <br />

        <p>
          The navigation bar features a subtle elevation when not at the default
          position at the top of the screen, and auto-hides itself during a
          downard scrolling event. It returns into view once the user decides to
          scroll upwards.
        </p>
        <br />
        <p>
          Once the layout is setup, `rem` units are used to create spacing
          between sections so that content, headers and the navigation bar can
          align themselves according to Material Design principles. Elevation is
          also used for all components.
        </p>
        <br />
        <Button exact to="/about">
          View Content
        </Button>
      </Card>
    </div>
  );
};

const Sub = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 1rem 3rem;
  font-size: 2rem;
`;

const Subtitle = styled.h6`
  margin-left: 3rem;
  margin-right: 1rem;
  font-weight: 500;
`;

const Button = styled(Link)`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  text-decoration: none;
  color: black;
  background-color: lightsalmon;

  &:hover {
    background-color: salmon;
  }
`;

export default Home;
