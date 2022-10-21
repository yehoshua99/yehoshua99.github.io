import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const menu = [
  {
    link0: '/',
    link1: '/ourservices',
    link2: '/whyus',
    link3: '/testimonial',
    link4: '/frequentlyaskedquestion'
  }
  
]

const Navigation = () => {
    return (
        <div>
          {[ 'lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className=" navbar mb-3">
              <Container>
                <Navbar.Brand href="/" className='BCR'></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                      <a href="/" className='bcrHumberger'><b>BCR</b></a>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                   
                  {menu.map(({link1,link2,link3,link4}) => {
                      return(
                        <Nav className="justify-content-end flex-grow-1 pe-3 ">
                        <div className='menuNav'>
                            <Link to={link1}><a>Our Services</a></Link>
                            <Link to={link2}>Why Us</Link>
                            <Link to={link3}>Testimony</Link>
                            <Link to={link4}>FAQ</Link>
                        </div>
                    
                    </Nav>
                      )
                    })}
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      );
}

export default Navigation