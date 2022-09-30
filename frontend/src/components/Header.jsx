import { Button, Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

const Header = observer(() => {
  const {user} = useContext(Context)
  const history = useNavigate()

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.clear()
    history(LOGIN_ROUTE)
  }

  return (
    <Container className="fix">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YOU SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">New Products</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>              
            </Nav>
            {user.isAuth ?
              <Nav className="ml-auto" style={{ color: 'white' }}>                
                <Button variant={"outline-light"} onClick={() => logout()}>Выход</Button>
              </Nav>
              :
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>                
              </Nav>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
});
export default Header;
