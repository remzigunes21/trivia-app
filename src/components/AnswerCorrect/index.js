import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import Lottie from "react-lottie";
import CorrectLottie from "../../assets/correctanswer.json";

import TgButton from "../Button/index.js";

class Correct extends Component {
  constructor(props) {
    super(props);
    this.state = { isCorrect: true };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: CorrectLottie
    };
    if (!typeof this.props.location.state.isCorrect === "boolean") return null;
    return this.props.location.state.isCorrect === true ? (
      <Container fluid>
        <Row>
          <Col>
            <Lottie options={defaultOptions} height={200} width={300} />
            <Col>
              <div>
                <p>You have earned {this.props.location.state.score} points</p>
                <p>
                  <h3>total:</h3> {this.props.location.state.score} points
                </p>
              </div>
              <div className="md-10">
                <h3> Correct</h3>
              </div>
              <div className="md-10">
                <TgButton
                  text="NEXT QUESTİONS"
                  className="btn "
                  color="info"
                  onClick={this.onNextQuestions}
                />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    ) : (
      <Container fluid>
        <Row>
          <Col>
            <Lottie options={defaultOptions} height={200} width={300} />
            <Col>
              <div className="md-10 ">
                <h3>InCorrect!</h3>
              </div>
              <TgButton
                text=" GAME OWER"
                color="danger"
                onClick={this.onGameOwer}
              />
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
