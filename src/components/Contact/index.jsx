import { Label, ContactContainer, EmailContainer } from "./ContactStyles";

export const Contact = () => {
  return (
    <ContactContainer>
      <Label>📨 Contacto</Label>

      <h2>Vamos a Conversar</h2>

      <EmailContainer>
        <span>Email:</span>
        <p>rony1710.dev@gmail.com</p>
      </EmailContainer>
    </ContactContainer>
  );
};
