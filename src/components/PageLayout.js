import styled from "styled-components";
const PageLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  min-height: calc(100vh - 3rem);
  padding: 1rem 2rem;
  /* border-radius: 1rem; */
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

export default PageLayout;
