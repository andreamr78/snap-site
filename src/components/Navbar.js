import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/Navbar-styles.css'
import {useEffect, useState} from 'react';


function Topbar() {

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  return(
    <>
      {['md'].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">snap</Navbar.Brand>
            <Navbar.Toggle style={{border:"none"}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                <NavDropdown title={<span onClick={() => setIsActive(!isActive)}>Features {isActive? <svg  width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg> : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>} </span>} i id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  <NavDropdown.Item href="#action/3.1"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg> To do List</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/></svg> Calendar</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"><svg width="13" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/></svg> Reminders</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"> <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/></svg>Planning</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span onClick={() => setIsActive2(!isActive2)}>Company {isActive2? <svg  width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg> : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>} </span>} i id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#home">Carrers</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
       
                </Nav>
            
                <div id='d-flex' >
                    <Button className='button-id' variant="light">Login</Button> 
                    <Button className='button-id' variant="outline-dark">Register</Button>
                  </div>
          
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Topbar