import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  background-color: var(--lightblue);
  .banner-content {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 0;

    > h1 {
      text-align: left;
      color: white;
    }
    > h2 {
      margin-top: 2rem;
      text-align: right;
      color: white;
    }
  }
`;
