import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";
export default function Header(props) {
    console.log(props)
    const id = 1;
    const title = "Test"
        return (
            <>
                   <Navbar bg="light" expand="lg">
                   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
                    
                <NavLink to={`/events?name=${title}`}  >Events</NavLink>
                <NavLink to="/events" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Events</NavLink>
                <Link to={`/events/${id}/${title}`}>Event Details</Link>
                {/* <NavLink to="/products" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>Products</NavLink> */}
                <Link to="/counter">Counter</Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </>
       ) 
}