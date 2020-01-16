import React from "react";
import { Container } from "reactstrap";
import TrContainer from "../../components/TrContainer";
import TrStepper from "../../components/TrStepper";
import BaseComponent from "../BaseComponent";

class Result extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      score: null,
      activeQuestionIndex: null,
      isCorrect: null,
      isLastQuestion: false,
      time: null
    };
  }

  componentDidMount() {
    if ([undefined, null].includes(this.props.location.state)) {
      //url block
      this.$history("/");
    } else {
      const {
        score,
        activeQuestionIndex,
        isCorrect,
        difficulty,
        time
      } = this.props.location.state;

      this.setState({
        score,
        difficulty,
        activeQuestionIndex,
        isCorrect,
        isLastQuestion: activeQuestionIndex === 10,
        time
      });
    }
  }
  render() {
    const {
      score,
      isLastQuestion,
      activeQuestionIndex,
      isCorrect,
      time
    } = this.state;

    if (isCorrect) {
      return (
        <Container fluid style={{ backgroundColor: "#001641" }} className="app">
          {activeQuestionIndex ? (
            <TrStepper activeStep={activeQuestionIndex}></TrStepper>
          ) : null}

          <TrContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
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
                className="pl-4 pr-4 ml-5"
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  height: 35,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                Remaing Time: {time}
              </div>
            </div>

            <div className="text-center">
              <img
                style={{}}
                src="/winner.png"
                height={"300"}
                width={"300"}
              ></img>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  className="pl-4 pr-4 pt-4 pb-4 mt-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    fontSize: 50,
                    letterSpacing: 25,
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "orange",
                    fontWeight: "bolder"
                  }}
                >
                  {isLastQuestion ? "YOU WIN !!!" : "GREAT !!!"}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  className="pl-4 pr-4 pt-4 pb-4 mt-3 clickable"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    fontSize: 30,
                    letterSpacing: 15,
                    textAlign: "center",
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "green",
                    fontWeight: "bolder"
                  }}
                  onClick={
                    isLastQuestion
                      ? () => this.$history("/")
                      : () => {
                          const {
                            score,

                            activeQuestionIndex,
                            difficulty
                          } = this.state;

                          this.$history({
                            pathname: "/dashboard",
                            state: {
                              difficulty,
                              score,
                              activeQuestionIndex
                            }
                          });
                        }
                  }
                >
                  {isLastQuestion ? "TRY AGAIN !!!" : "Next Question"}
                </div>
              </div>
            </div>
          </TrContainer>
        </Container>
      );
    } else
      return (
        <Container fluid style={{ backgroundColor: "#001641" }} className="app">
          {activeQuestionIndex ? (
            <TrStepper activeStep={activeQuestionIndex}></TrStepper>
          ) : null}
          <TrContainer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
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
                SCORE:{" "}
                {time >= 13
                  ? score - 100
                  : time >= 8
                  ? score - 75
                  : time >= 5
                  ? score - 50
                  : 0}
              </div>
            </div>

            <div className="text-center">
              <img
                style={{}}
                src="/gameoverman.png"
                height={"300"}
                width={"300"}
              ></img>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  className="pl-4 pr-4 pt-4 pb-4 mt-3"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    fontSize: 50,
                    letterSpacing: 25,
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "orange",
                    fontWeight: "bolder"
                  }}
                >
                  GAME OVER
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div
                  className="pl-4 pr-4 pt-4 pb-4 mt-3 clickable"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    fontSize: 30,
                    letterSpacing: 15,
                    textAlign: "center",
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#DA3B7D",
                    fontWeight: "bolder"
                  }}
                  onClick={() => this.$history("/")}
                >
                  TRY AGAIN
                </div>
              </div>
            </div>
          </TrContainer>
        </Container>
      );
  }
}

export default Result;
