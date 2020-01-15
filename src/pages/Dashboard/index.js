import React from "react";
import TrStepper from "../../components/TrStepper";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import TrContainer from "../../components/TrContainer";
import BaseComponent from "../BaseComponent";
import Time from "../../components/Time";

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

class Dashboard extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      data: [],
      answersRandoms: [],
      score: null
    };
  }

  componentDidMount() {
    const { questions } = this.props;

    this.setState({ questions: questions });

    console.log("TCL: Dashboard -> componentDidMount -> questions", questions);

    if ([undefined, null].includes(this.props.location.state)) {
      this.props.history.push("/");
    } else {
      const { difficulty, activeQuestionIndex } = this.props.location.state;

      if (difficulty) {
        if (difficulty === 1) {
          this.getEasyData(activeQuestionIndex);
        } else if (difficulty === 2) {
          this.getMediumData(activeQuestionIndex);
        } else this.getHardData(activeQuestionIndex);
      }

      this.getHistoryState();
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
    const { activeQuestionIndex, data, answersRandoms } = this.state;

    const { score } = this.props.location.state;

    const { questions } = this.props;

    if (!data.length)
      return (
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "#001641" }}
        ></div>
      );

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

            <Time onRef={ref => (this.timeRef = ref)} />
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
    const time = this.timeRef.getCurrentTime();

    console.log("TCL: Dashboard -> onClick -> time", time);
    const { activeQuestionIndex, data, score } = this.state;
    const { difficulty } = this.props.location.state;

    this.props.history.push({
      pathname: "/result",
      state: {
        isCorrect: data[activeQuestionIndex].correct_answer === answer,
        activeQuestionIndex: activeQuestionIndex + 1,
        score:
          time >= 13
            ? score + 100
            : time >= 8
            ? score + 75
            : time >= 5
            ? score + 50
            : score,
        difficulty,
        time
      }
    });
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions
});

export default connect(mapStateToProps)(Dashboard);
