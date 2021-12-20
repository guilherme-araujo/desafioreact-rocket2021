import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--lightblue);
  color: white;
  height: 280px;
  width: 220px;
  align-items: center;
  padding: 0.5rem 1rem;

  margin-left: 2rem;
  margin-top: 2rem;

  border-radius: 1rem;

  img {
    height: 160px;
  }
  h4 {
    margin-top: 1rem;
  }
  p {
    margin-top: 1rem;
  }
`;
