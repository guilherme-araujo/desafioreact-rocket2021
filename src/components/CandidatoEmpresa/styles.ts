import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem 1rem;
  background-color: white;
  margin-top: 1rem;
  > .candidatoDiv {
    display: flex;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    img {
      width: 205px;
      height: 154px;
      margin-top: 0.5rem;
    }
    .candLeft {
      h3 {
        font-size: 2rem;
      }
    }
    .candRight {
      margin-left: 1rem;
      button {
        margin-top: 1rem;
        background: var(--darkblue);
        color: white;
        border: 0;

        width: 14rem;
        padding: 0.5rem 0.5rem;
        border-radius: 0.4rem;
        font-size: 1.125rem;
      }
    }
  }

  > .empresaDiv {
    display: flex;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    img {
      width: 200px;
      height: 200px;
    }
    .empresaRight {
      h3 {
        font-size: 2rem;
      }
    }
    .empresaLeft {
      text-align: right;
      margin-right: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      button {
        margin-top: 1rem;

        background: var(--red);
        color: white;
        border: 0;

        width: 14rem;
        padding: 0.5rem 0.5rem;
        border-radius: 0.4rem;
        font-size: 1.125rem;
      }
    }
  }
`;
