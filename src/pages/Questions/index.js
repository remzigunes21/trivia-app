import React, { Component } from "react";
import "../../appCss/index.css";
import { Container, Row, Col } from "reactstrap";
import TgButton from "../../components/Button";
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
      easyData: [],
      mediumData: [],
      hardData: [],
      activeQuestionIndex: 0,
      time: 15,
      score: 0,
      joker: false
    };
  }

  componentDidMount() {
    const { difficulty } = this.props.location.state;
    if (difficulty) {
      if (difficulty === "easy") {
        this.getEasyData();
      } else if (difficulty === "medium") {
        this.getMediumData();
      } else this.getHardData();
    }

    this.getHistoryState();

    this.timer = setInterval(this.startTimer, 2000);
  }

  getSelectedQuestions = () => {};

  getHistoryState = () => {
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
  };

  onClickJoker = () => {
    const { joker, data, activeQuestionIndex } = this.state;
    let removeElement = [data[activeQuestionIndex].incorrect_answers];

    if (joker === true) {
      for (let i = removeElement.length - 1; i >= 0; i--) {
        removeElement.splice(
          Math.floor(Math.random() * removeElement.length),
          1
        );
        //console.log(array);
      }
    }
  };

  getEasyData = () => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          easyData: data.results,
          answersRandoms: shuffle([
            data.results[this.state.activeQuestionIndex].correct_answer,
            ...data.results[this.state.activeQuestionIndex].incorrect_answers
          ])
        })
      );
  };

  getMediumData = () => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results,
          answersRandoms: shuffle([
            data.results[this.state.activeQuestionIndex].correct_answer,
            ...data.results[this.state.activeQuestionIndex].incorrect_answers
          ])
        })
      );
  };

  getHardData = () => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          hardData: data.results,
          answersRandoms: shuffle([
            data.results[this.state.activeQuestionIndex].correct_answer,
            ...data.results[this.state.activeQuestionIndex].incorrect_answers
          ])
        })
      );
  };

  render() {
    const { data, activeQuestionIndex, answersRandoms } = this.state;
    if (!data.length || !answersRandoms) return null;

    return (
      <Container fluid>
        <div className="row">
          <div className="col">
            <div className="row">
              <div>
                <h3 className="header3"> Question:</h3>{" "}
                <p>{activeQuestionIndex + 1 + " / " + data.length}</p>
              </div>
              <div>
                <h3 className="header3"> Puan :</h3>
                <p className="pHeader">{this.state.score}</p>
              </div>
            </div>
            <div>
              <h4>{data[activeQuestionIndex].question}</h4>
            </div>
          </div>
          <div>
            <p>
              <h3>Remaing Time:</h3> {this.state.time}
            </p>
          </div>
        </div>

        {answersRandoms.map(ans => {
          return (
            <div className="m-4">
              <TgButton
                text={ans}
                className="btn "
                onClick={() => this.onClick(ans)}
                color="warning"
              />
            </div>
          );
        })}
        <div>
          <TgButton
            text="%50 joker"
            color="primary"
            className="btn"
            onClick={this.onClickJoker}
          />
        </div>
      </Container>
    );
  }

  startTimer = () => {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      clearInterval(this.timer);
      this.props.history.push("/times-up");
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
