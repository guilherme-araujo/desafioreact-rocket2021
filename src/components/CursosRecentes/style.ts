import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  h3 {
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;
  }
  > .courseList {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;
