import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

function Head() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Rizki Nofrian Wahyudi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"className=' '>
          <Nav className="ms-auto text-white">
            <Nav.Link><Link to="home" activeClass='Active'>Home</Link></Nav.Link>
            <Nav.Link><Link to="about">About</Link></Nav.Link>
            <Nav.Link to="skill">Skills</Nav.Link>
            <Nav.Link to='portofolio'>Portofolio</Nav.Link>
            <Nav.Link to='contact'>Contact</Nav.Link>
    
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;