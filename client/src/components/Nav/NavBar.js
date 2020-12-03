import React, { useState } from "react";
import { Nav, Navbar, Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./NavBar.css";

const NavBar = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  const action = () => {
    if (currentUser) return handleLogout();
  };

  return (
    <div>
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <Link to="/home" style={{ textDecoration: "none" }}>
              HEALTH
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                to="/home"
                className="navv"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                to="/patientList"
                className="navv"
                style={{ textDecoration: "none" }}
              >
                Patient List
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/addPatient"
                className="navv"
                style={{ textDecoration: "none" }}
              >
                Add Patient
              </Link>
            </Nav.Link>
          </Nav>

          <Form inline className="btn">
            <div className="logForm">
              <div className="docEmail">
                {error && <Alert variant="danger">{error}</Alert>}

                {currentUser ? currentUser.email : ""}
              </div>
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <Button
                  variant="outline-primary"
                  className="btn1"
                  onClick={action}
                >
                  {currentUser ? "Logout" : "Login"}
                </Button>
              </Link>

              <Link to="/Signup" style={{ textDecoration: "none" }}>
                {!currentUser ? (
                  <Button variant="outline-primary" className="btn2">
                    SignUp
                  </Button>
                ) : null}
              </Link>
            </div>
          </Form>
        </Navbar>
      </>
    </div>
  );
};

export default NavBar;
