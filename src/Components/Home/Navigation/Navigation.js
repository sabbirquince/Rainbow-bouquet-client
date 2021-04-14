import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  return (
    <Navbar fixed="top" className="my-nav" expand="lg">
      <Navbar.Brand className="my-cl-sec" href="/">
        Rainbow Bouquet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="p-2 px-4 my-cl-sec" to="/home">
            Home
          </Link>
          <Link className="p-2 px-4 my-cl-sec" to="/portfolio">
            Portfolio
          </Link>
          <Link className="p-2 px-4 my-cl-sec" to="/contact">
            Contact Us
          </Link>
          <Link className="p-2 px-4 my-cl-sec" to="/admin">
            Admin
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
