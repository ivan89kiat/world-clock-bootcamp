import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Components/Clock";
import { Col, Container, Row } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container className="data_container">
            <Row className="row">
              <Col className="col">City</Col>
              <Col className="col">Clock</Col>
            </Row>
            <Row className="row">
              <Col className="col">Singapore</Col>
              <Col className="col">
                <Clock timeZone="Asia/Singapore" />
              </Col>
            </Row>
            <Row className="row">
              <Col className="col">Los Angeles</Col>
              <Col className="col">
                <Clock timeZone="America/Los_Angeles" />
              </Col>
            </Row>
            <Row className="row">
              <Col className="col">London</Col>
              <Col className="col">
                <Clock timeZone="Europe/London" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
