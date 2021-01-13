import styled from "styled-components";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem 3rem;
  margin: 1.5rem 0;
  background: #fff;
  display: flex;
  flex-direction: column;

  border-radius: 1rem;

  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

export default Card;
