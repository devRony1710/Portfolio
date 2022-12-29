import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
  gap: 32px;

  img {
    height: 300px;
    width: 300px;
    border-radius: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 0;

    img {
      height: 400px;
      width: 400px;
    }
  }
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 90%;

  h2 {
    font-size: 36px;
    display: none;
  }

  p {
    opacity: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;

    h2 {
      display: block;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const Label = styled.div`
  text-align: center;
  width: 120px;
  padding: 6px;
  border-radius: 24px;
  background-color: rgba(123, 74, 226, 0.1);
  color: #7b4ae2;
`;
