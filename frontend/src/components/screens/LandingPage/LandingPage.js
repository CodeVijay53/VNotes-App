import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className=" intro-text">
            <div>
              <h1 className="title">
                Welcome to V-Notes
                <span></span>
              </h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" style={{ width: 200, height: 55 }}>
                  Login
                </Button>
              </a>
              <a href="/signup">
                <Button
                  variant="outline-primary"
                  size="lg"
                  style={{ width: 200, height: 55 }}
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
