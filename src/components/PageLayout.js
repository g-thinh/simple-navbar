import styled from "styled-components";

const PageLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  background: lightblue;
  width: 100%;
  overflow: auto;
  height: 500vh;
  padding: 2rem 5rem;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

export default PageLayout;
