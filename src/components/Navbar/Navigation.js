import React from 'react';
import './Navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="navbar">
      <Navbar fixed="top" bg="dark" variant="dark" expand="md sm">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-a" to="/home">Home</Link>
            <Link className="nav-a" to="/services">Services</Link>
            <Link className="nav-a" to="/news">News</Link>
          </Nav>
          <Nav>
            {!user.email ? <><Link className="nav-a" to="/login">Login</Link>
              <Link className="nav-a" to="/signup">Sign up</Link></>
              :
              <button onClick={logOut} className="btn-danger rounded-2 mx-2 px-2">LOG OUT 
              <i className="fas fa-sign-out-alt"></i>
              </button>}
            {user.email ?
              <small className="user-name text-white" eventKey={2}> Login as : {user?.displayName}

              </small> : <small>{ }</small>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;