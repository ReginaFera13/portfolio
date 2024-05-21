import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


function NavBar() {
  return (
    <Navbar bg='gradient-black-green' expand="lg" className="bg-body-tertiary" fixed="top" variant='dark' >
      <Container>
      <Navbar.Brand as={Link} to='/'>
            <Image
              alt=""
              src="portfolio_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top padding1"
              roundedCircle
            />{' '}
            Shawn Smith
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;