import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 90%;
  margin: 40px auto 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h2 {
    font-size: 24px;
  }
`;

export const Label = styled.span`
  text-align: center;
  width: 120px;
  padding: 6px;
  border-radius: 24px;
  background-color: rgba(123, 74, 226, 0.1);
  color: #7b4ae2;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-size: 18px;
    color: #7b4ae2;
  }

  p {
    opacity: 50%;
  }
`;
