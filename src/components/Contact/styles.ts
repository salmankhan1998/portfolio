import styled from "styled-components";

export const Container = styled.section`
  margin-top: 20rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 5rem;
    }
    p {
      color: var(--green);
      font-weight: 500;
      margin-top: 1rem;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 2rem;
  }
  .phone-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 230px;
    margin: 4rem auto 0rem;
    padding: 16px 20px;
    border: 1px solid #fff;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
  .phone {
    width: fit-content;
  }
  .copy-icon {
    font-size: 18px;
  }
  .phone:after {
    display: block;
    content: "";
    border-bottom: solid 3px var(--green);
    animation: moveBorder 1s ease-in-out;
  }
  .phone:hover:after {
    transform: scaleX(1);
  }
  .phone-wrapper:hover .copy-icon {
    transform: scale3d(1.5, 1.5, 1.5);
    transition: 0.7s;
  }
  @keyframes moveBorder {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }
`;
