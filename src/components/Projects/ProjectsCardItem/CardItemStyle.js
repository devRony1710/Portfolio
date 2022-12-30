import styled from "styled-components";

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 32px;
  border: 1px solid rgba(123, 74, 226, 0.3);
  border-radius: 16px;
  height: 300px;
  width: 100%;
  justify-content: space-around;

  p {
    opacity: 50%;
  }
`;

export const CardLabelsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardLinksContainer = styled.div`
  display: flex;
  gap: 16px;

  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
