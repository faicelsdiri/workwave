// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav,Button } from 'react-bootstrap';


function NavBar() {
  //const url_logo = "https://i.ibb.co/F5mJ428/logo-no-background.png";
  const url_logo2 ="https://i.ibb.co/VYNLKqm/logo-no-background.png"
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={url_logo2} alt="Logo" width="200" height="60" border="0"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
         
        </Container>
        <Button variant="outline-danger" >
        Register
      </Button>
      </Navbar>

      
    </>
  );
}

export default NavBar;
