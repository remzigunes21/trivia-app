import React, { Component } from "react";
import "../../appCss/index.css";
import { Button, Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeQuestionIndex: 0,
      time: 15,
      score: 0
    };
  }

  componentDidMount() {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
    )
      .then(response => response.json())
      .then(data => this.setState({ data: data.results }));

    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.activeQuestionIndex &&
      this.props.location.state.score
    ) {
      this.setState({
        activeQuestionIndex: this.props.location.state.activeQuestionIndex,
        score: this.props.location.state.score
      });
    }
    this.timer = setInterval(this.startTimer, 2000);

    console.log(this.timer);
  }
  render() {
    const { data, activeQuestionIndex } = this.state;
    if (!data.length) return null;

    let answersRandoms = shuffle([
      data[activeQuestionIndex].correct_answer,
      ...data[activeQuestionIndex].incorrect_answers
    ]);

    return (
      <Container fluid>
        <div className="row">
          <div className="col">
            <div className="row">
              <div>
                Question: {activeQuestionIndex + 1 + " / " + data.length}
              </div>
              <div
                style={{
                  marginLeft: 150
                }}
              >
                Puan : {this.state.score}
              </div>
            </div>
            <div>{data[activeQuestionIndex].question}</div>
          </div>
          <div>Remaing Time: {this.state.time}</div>
        </div>

        {answersRandoms.map(ans => {
          return (
            <div className="m-4">
              <Button
                className="btn btn-primary"
                onClick={() => this.onClick(ans)}
              >
                {ans}
              </Button>
            </div>
          );
        })}
      </Container>
    );
  }

  startTimer = () => {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      if (this.state.time === 0) {
        this.props.history.push("/");
        alert("süreniz bitti");
        clearInterval(this.timer);
        window.location.reload();
      }
    }
  };

  onClick(answer) {
    const { activeQuestionIndex, data, score } = this.state;

    this.props.history.push({
      pathname: "/result",
      state: {
        isCorrect: data[activeQuestionIndex].correct_answer === answer,
        activeQuestionIndex: activeQuestionIndex + 1,
        score: score + 50
      }
    });
  }
}

export default Questions;
