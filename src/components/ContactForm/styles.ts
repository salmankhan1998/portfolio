import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  display: grid;
  place-items: center;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 10px;
    input,
    textarea {
      width: 60rem;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      outline: none;
      border: none;
      background: none;
      border: 1px solid #fff;
      color: white;
      font-weight: 400;
      &::placeholder {
        color: #fff;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`;
