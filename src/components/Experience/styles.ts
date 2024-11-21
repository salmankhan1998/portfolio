import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  .title {
    text-align: center;
    font-size: 4rem;
    width: fit-content;
    margin: 0 auto 6rem;
  }

  .experiences-wrapper {
    .experience {
      .job-title {
        font-size: 26px;
        margin-bottom: 10px;
      }

      .job-duration,
      .address {
        font-size: 14px;
        opacity: 0.7;
      }

      .job-responsibilities {
        margin-top: 20px;
      }

      .skills-stack {
        margin-top: 20px;
        span {
          color: var(--green);
          font-weight: 700;
        }
      }
    }
  }
`;
