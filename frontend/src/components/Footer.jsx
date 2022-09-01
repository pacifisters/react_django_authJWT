import { Container } from "react-bootstrap";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </Container>
  );
}
export default Footer;
