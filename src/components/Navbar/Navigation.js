import React from 'react';
import './Navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
   
      <div className="navbar-section">
      <Navbar  className="navbar-collapse" id="navbarToggleExternalContent" fixed="top" bg="dark" variant="dark" expand="sm">
        <Container className="navbar-container">
          <Link className="logo" readOnly to="/home">MEDICARE</Link>
          <Nav className="me-auto">
            <Link className="nav-a" to="/home">Home</Link>
            <Link className="nav-a" to="/about">About</Link>
            <Link className="nav-a" to="/services">Services</Link>
            <Link className="nav-a" to="/news">News</Link>
            <Link className="nav-a" to="/contact">Contact</Link>
          </Nav>
          <Nav>
        
        {user.email ?
              <small className="user-name text-white" eventkey={2}> Login as : {user?.displayName}

              </small> : <small>{ }</small>}

            {user.email ? 
            <button onClick={logOut} className="btn-danger rounded-2 mx-2 px-2">LOG OUT 
            <i className="fas fa-sign-out-alt"></i>
            </button>
              :
             
              <><Link className="nav-a" to="/login">Login</Link>
              <Link className="nav-a" to="/signup">Sign up</Link></>
              }
        
           
          </Nav>
        </Container>
      </Navbar>
    </div>

  );
};

export default Navigation;