import React, { Component } from "react";
import TrStepper from "../../components/TrStepper";
import { Container, Row, Col, Spinner } from "reactstrap";
import TrContainer from "../../components/TrContainer";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answersRandoms: [],
      score: null,
      time: 15
    };
  }

  componentDidMount() {
    if ([undefined, null].includes(this.props.location.state)) {
      this.props.history.push("/");
    } else {
      const { difficulty, activeQuestionIndex } = this.props.location.state;
      console.log(
        "TCL: Dashboard -> componentDidMount -> difficulty",
        difficulty
      );

      if (difficulty) {
        if (difficulty === 1) {
          this.getEasyData(activeQuestionIndex);
        } else if (difficulty === 2) {
          this.getMediumData(activeQuestionIndex);
        } else this.getHardData(activeQuestionIndex);
      }

      this.getHistoryState();

      this.timer = setInterval(this.startTimer, 1000);
    }
  }

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

  getEasyData = activeQuestionIndex => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results,
          activeQuestionIndex,
          answersRandoms: shuffle([
            data.results[activeQuestionIndex].correct_answer,
            ...data.results[activeQuestionIndex].incorrect_answers
          ])
        })
      );
  };

  getMediumData = activeQuestionIndex => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results,
          activeQuestionIndex,
          answersRandoms: shuffle([
            data.results[activeQuestionIndex].correct_answer,
            ...data.results[activeQuestionIndex].incorrect_answers
          ])
        })
      );
  };

  getHardData = activeQuestionIndex => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=hard&type=multiple`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results,
          activeQuestionIndex,
          answersRandoms: shuffle([
            data.results[activeQuestionIndex].correct_answer,
            ...data.results[activeQuestionIndex].incorrect_answers
          ])
        })
      );
  };

  render() {
    const { activeQuestionIndex, data, answersRandoms, score } = this.state;
    if (!data.length)
      return (
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#001641" }}
        ></div>
      );
    console.log("TCL: Dashboard -> render -> data", data);
    return (
      <Container fluid style={{ backgroundColor: "#001641" }} className="app">
        <TrStepper activeStep={activeQuestionIndex}></TrStepper>
        <div>{data[activeQuestionIndex].correct_answer}</div>
        <TrContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div
              className="pl-4 pr-4"
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                height: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              SCORE: {score}
            </div>

            <div
              className="pl-4 pr-4"
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                height: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              Remaing Time : {this.state.time}
            </div>
          </div>
          <Container fluid>
            <Row>
              <img
                style={{ zIndex: 2, position: "absolute" }}
                src="/manquestion.png"
                height={"300"}
                width={"300"}
              ></img>
              <div
                style={{
                  backgroundColor: "white",
                  height: 200,
                  marginTop: 75,
                  marginLeft: 100,
                  borderRadius: 20,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingLeft: 200,
                  paddingRight: 20
                }}
              >
                {data[activeQuestionIndex].question}
              </div>
            </Row>
          </Container>
          <div
            className="mt-4 mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div
              onClick={() => this.onClick(answersRandoms[0])}
              className="mr-2 clickable btn-one btn"
              style={{
                // backgroundColor: "white",
                borderRadius: 20,
                height: 100,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {answersRandoms[0]}
            </div>
            <div
              onClick={() => this.onClick(answersRandoms[1])}
              className="ml-2 clickable btn-one btn"
              style={{
                // backgroundColor: "white",
                borderRadius: 20,
                height: 100,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {answersRandoms[1]}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <div
              onClick={() => this.onClick(answersRandoms[2])}
              className="mr-2 clickable btn-one btn"
              style={{
                // backgroundColor: "white",
                borderRadius: 20,
                height: 100,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {answersRandoms[2]}
            </div>
            <div
              onClick={() => this.onClick(answersRandoms[3])}
              className="ml-2 clickable btn-one btn"
              style={{
                //
                // backgroundColor: "white",
                borderRadius: 20,
                height: 100,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {answersRandoms[3]}
            </div>
          </div>
        </TrContainer>
      </Container>
    );
  }

  onClick(answer) {
    const { activeQuestionIndex, data, score, time } = this.state;
    const { difficulty } = this.props.location.state;

    this.props.history.push({
      pathname: "/result",
      state: {
        isCorrect: data[activeQuestionIndex].correct_answer === answer,
        activeQuestionIndex: activeQuestionIndex + 1,
        score: score + 50,
        difficulty,
        time
      }
    });
  }

  startTimer = () => {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      clearInterval(this.timer);
      this.props.history.push("/times-up");
    }
  };
}

export default Dashboard;
