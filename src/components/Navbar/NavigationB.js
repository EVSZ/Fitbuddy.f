import './NavigationB.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Navbar, Nav, Form, Button}  from 'react-bootstrap';

function NavigationB() {
  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><svg id="fire" color="rgb(22, 169, 199)" width="50px" height="50px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire-alt" className="svg-inline--fa fa-fire-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"></path></svg>
    </Navbar.Brand>
    <Nav className="mr-auto" id="navbarText">
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#pricing">Personal</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info">Login</Button>
    </Form>
  </Navbar>
  );
}

export default NavigationB;
