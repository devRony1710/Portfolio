import styled from "styled-components";

export const HeroContainer = styled.section`
  display: grid;
  grid-auto-rows: auto;
  place-content: center;
  gap: 98px;
  margin: 100px 0 30px;
`;

export const InfoHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 48px;
  }

  p {
    font-size: 18px;
    opacity: 50%;
  }
`;
