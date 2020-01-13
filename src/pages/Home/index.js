import React, { Component } from "react";
import Questions from "../Questions";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        {/* <Questions {...this.props} /> */}
        <Row>
          <Col>
            <img
              src="NoFav.svg"
              alt="A Rectangle Image with SVG"
              height="300px"
              width="300px"
            />
            <Col>
              <div className="title">A trivia game</div>
              <div className="md-10">
                <Button className="btn btn-success" onClick={this.onClick}>
                  GET STARTED
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }

  onClick = () => {
    this.props.history.push({
      pathname: "/questions"
    });
  };
}

export default Home;
