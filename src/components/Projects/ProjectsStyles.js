import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 90%;
  margin: 40px auto 20px;

  span {
    text-align: center;
    width: 120px;
    padding: 6px;
    border-radius: 24px;
    background-color: rgba(123, 74, 226, 0.1);
    color: #7b4ae2;
  }
  h2 {
    font-size: 24px;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  width: 100%;
  overflow: scroll;
  gap: 32px;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: hidden;
  }
`;
