import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class TrContainer extends Component {
  render() {
    return (
      <Container
        fluid
        className="grad app"
        style={{ backgroundColor: "#001641" }}
      >
        <Row>
          <Col sm={2} lg={2} md={2} xs={2}></Col>
          <Col sm={8} lg={8} md={8} xs={8}>
            {this.props.children}
          </Col>
          <Col sm={2} lg={2} md={2} xs={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default TrContainer;
