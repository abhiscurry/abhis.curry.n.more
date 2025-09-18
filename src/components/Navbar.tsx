// src/components/Navbar.jsx → RENAME to Navbar.tsx if you're using TypeScript

import { Nav } from "react-bootstrap";
import styles from "./Navbar.module.scss"; // ✅ Import SCSS Module
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.png" alt="Bootstrap" width="75" height="75" />
          <span className={` ${styles.brandName}`}>Abhi's Curry N More</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.navbarNav}`}>
            <Nav.Link
              as={NavLink}
              to="/"
              // @ts-ignore
              className={({ isActive, isPending }) => {
                console.log("hello");
                isPending ? "pending" : isActive ? "active" : "";
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About us
            </Nav.Link>
            <li className="nav-item">
              <a href="https://www.google.com/viewer/chooseprovider?mid=/g/11q33zvkz5&g2lbs=AO8LyOI65lpBhTXWeYuolbKx3qz1LVN5TrmVLSybnA12n6Bhd22EETdrmnqPTvGQH2U1GS4zIgSlpwsumCAynLXSohkQAVsBIA%3D%3D&hl=en-CA&gl=ca&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=search&gei=AF3LaOjJHrDn5NoPwqaosA4&ei=AF3LaOjJHrDn5NoPwqaosA4&fo_s=OA&opi=89978449&ebb=1&foub=mcpp&orderType=2">
                <button
                  type="button"
                  className={`custom-primary-btn  btn btn-sm`}
                >
                  Order Online
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
