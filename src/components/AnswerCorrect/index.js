import React, { Component } from "react";
import { Container, Button, Row, Col, Spinner } from "reactstrap";

class Correct extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    if (!typeof this.props.location.state.isCorrect === "boolean") return null;
    return this.props.location.state.isCorrect === true ? (
      <Container fluid>
        <Row>
          <Col>
            <img
              src="NoFav.svg"
              alt="A Rectangle Image with SVG"
              height="90px"
              width="90px"
            />
            <Col>
              <div>{this.props.location.state.score}</div>
              <div className="md-10"> Correct</div>
              <div className="md-10">
                <Button
                  className="btn btn-success"
                  onClick={this.onNextQuestions}
                >
                  NEXT QUESTİONS
                </Button>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    ) : (
      <Container fluid>
        <Row>
          <Col>
            <img
              src="NoFav.svg"
              alt="A Rectangle Image with SVG"
              height="90px"
              width="90px"
            />
            <Col>
              <div className="md-10 ">A trivia game</div>
              <Button color="danger" onClick={this.onGameOwer}>
                GAME OWER
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }

  onNextQuestions = () => {
    const { activeQuestionIndex, score } = this.props.location.state;

    this.props.history.push({
      pathname: "/questions",
      state: {
        activeQuestionIndex,
        score
      }
    });
  };

  onGameOwer = () => {
    this.props.history.push({
      pathname: "/"
    });
  };
}

export default Correct;
