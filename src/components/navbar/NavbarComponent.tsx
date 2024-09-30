import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#">Airdrop</Navbar.Brand>
      <Nav  className="justify-content-end">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
