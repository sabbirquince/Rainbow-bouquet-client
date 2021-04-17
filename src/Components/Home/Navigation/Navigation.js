import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigation.css";
import rainbow from "../../../icons/rainbow.png";

const Navigation = () => {
  return (
    <Navbar fixed="top" variant="dark" className="my-nav" expand="lg">
      <Navbar.Brand className="my-cl-sec brand-box" href="/">
        <img src={rainbow} className="brand-img" alt="" />
        <span>Rainbow Bouquet</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-2 mt-md-0">
          <Link
            className="p-3 p-lg-2 px-lg-4 mb-2 mt-4 mt-lg-0 mb-lg-0 my-nav-c text-center rounded rounded-2"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="p-3 p-lg-2 px-lg-4 mb-2 mb-lg-0 my-nav-c text-center rounded rounded-2"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="p-3 p-lg-2 px-lg-4 mb-2 mb-lg-0 my-nav-c text-center rounded rounded-2"
            to="/user"
          >
            User
          </Link>
          <Link
            className="p-3 p-lg-2 px-lg-4 mb-2 mb-lg-0 my-nav-c text-center rounded rounded-2"
            to="/admin"
          >
            Admin
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
