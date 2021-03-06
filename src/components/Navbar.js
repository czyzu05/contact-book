import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/contact-book" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
            Create contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
