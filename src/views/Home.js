import styled from "styled-components";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Title>Creating a Reponsive Layout with CSS Grids</Title>
      <Subtitle>
        Created by <b>Gia Thinh Nguyen</b>
      </Subtitle>
      <Card>
        <p>
          This demo was made to showcase a CSS approach to the responsive grid
          layout design to create a sidebar drawer UI element that would behave
          differently for mobile and non-mobile experiences. The navigation bar
          also has a few features that includes a subtle elevation when a the
          default top position, and auto-hides itself during a scrolling event.
          It returns into view once the user decides to scroll upwards.
        </p>
        <br />
        <p>
          Once the layout is setup, `rem` units are used to create spacing
          between sections so that content, headers and the navigation bar can
          align themselves according to Material Design principles. Elevation is
          also used for all components.
        </p>
      </Card>
    </div>
  );
};

const Title = styled.h1`
  margin: 1rem 3rem;
  font-size: 2rem;
`;

const Subtitle = styled.h6`
  margin: 0 3rem;
  font-weight: 500;
`;

export default Home;
