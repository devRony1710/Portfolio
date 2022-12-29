import styled from "styled-components";

export const HeroContainer = styled.section`
  display: grid;
  grid-auto-rows: auto;
  place-content: center;
  gap: 50px;
  margin: 100px 0 30px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 0;
    height: 300px;
  }
`;

export const HeroImg = styled.img`
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1024px) {
    height: 60%;
  }
`;

export const InfoHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    text-align: center;
    width: 120px;
    padding: 6px;
    border-radius: 24px;
    background-color: rgba(123, 74, 226, 0.1);
    color: #7b4ae2;
  }

  h2 {
    font-size: 48px;
  }

  p {
    font-size: 18px;
    opacity: 50%;
  }
`;
