import { Button, Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const Header = observer(() => {
  const {user} = useContext(Context)
  const history = useNavigate()

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Container className="fix">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user.isAuth ?
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)} className="me-3">Admin panel</Button>
                <Button variant={"outline-light"} onClick={() => logout()}>Exit</Button>
              </Nav>
              :
              <Nav className="ml-auto" style={{ color: 'white' }}>
                <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Avtorization</Button>                
              </Nav>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>




    // <header>
    //   <div className="container fixed-top">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light1">
    //       <div className="container-fluid">
    //         <a className="navbar-brand" href="#">CANDLE</a>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
    //           <ul className="navbar-nav align-items-center">
    //             <li className="nav-item navbar-text">
    //               <a href="#cheerleading" className="nav-link">Buy</a>
    //             </li>
    //             <li className="nav-item navbar-text">
    //               <a href="#age" className="nav-link">About</a>
    //             </li>
    //             <li className="nav-item navbar-text">
    //               <a href="#trainer" className="nav-link">Why</a>
    //             </li>
    //             <li className="nav-item navbar-text">
    //               <a href="#price" className="nav-link">WAT</a>
    //             </li>
    //             <li className="nav-item navbar-text">
    //               <a href="#contacts" className="nav-link">Address</a>
    //             </li>
    //             <span className="nav-link navbar-text">
    //               <a href="tel:{{menu.tel_for_call}}" className="navbar-tel" target="blank" >
    //                 +7 (985) 205 - 08 - 05
    //               </a>
    //             </span>
    //             <ul className="navbar-nav nav-icon navbar-text">
    //               <a className="nav-link" href="" target="blank">
    //                 <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top nav-item" />
    //               </a>
    //               <a className="nav-link" href="" target="blank">
    //                 <img src="" alt="" width="30" height="24" className="d-inline-block align-text-top nav-item" />
    //               </a>
    //             </ul>
    //             <div className="nav-link navbar-text">
    //               <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Oh Gog</button>
    //             </div>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>

    //   </div >

    // </header >


  );
});
export default Header;
