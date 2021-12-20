import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  background-color: #dcdcdc;

  > .menu-content {
    max-width: 1120px;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 675px) {
      justify-content: space-around;
    }
  }

  .menu-buttons {
    display: flex;

    button {
      background: var(--red);
      color: white;
      border: 0;

      width: 10rem;
      padding: 0.5rem 0.5rem;
      border-radius: 0.4rem;
      font-size: 1.125rem;

      & + button {
        margin-left: 0.5rem;
        background: var(--darkblue);
      }

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
