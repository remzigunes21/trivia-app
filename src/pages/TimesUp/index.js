import React from "react";
import Lottie from "react-lottie";
import TimeLottie from "../../assets/times-up.json";
import { Container } from "reactstrap";
import TrContainer from "../../components/TrContainer";
import TrStepper from "../../components/TrStepper";
import BaseComponent from "../BaseComponent.js";

class TimesUp extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestionIndex: 0,
      score: 0
    };
  }

  componentDidMount() {
    const { score } = this.props.location.state;
    if (!score) {
      return null;
    }
    this.setState({ score });
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: TimeLottie
    };
    const { activeQuestionIndex, score } = this.state;
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
              Score: {score}
            </div>
          </div>

          <div className="text-center">
            <Lottie options={defaultOptions} height={300} width={300} />

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

export default TimesUp;
