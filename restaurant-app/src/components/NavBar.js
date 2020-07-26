import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faSearch, faPlus,faUser } from '@fortawesome/free-solid-svg-icons'
import {Link } from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" > <Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
              {
                localStorage.getItem('login')?
                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} />Logout</Link></Nav.Link>
                : <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
              }
             

            </Nav>
          </Navbar.Collapse>
        </Navbar>
            </div>
        );
    }
}

export default NavBar;