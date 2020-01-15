import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import TrContainer from "../../components/TrContainer";
import Slider, { Range } from "rc-slider";

class Welcome extends Component {
  constructor(params) {
    super(params);
    this.state = {
      level: 2
    };
  }
  render() {
    const { level } = this.state;
    return (
      <TrContainer>
        <div
          style={{ fontSize: 70, color: "orange", fontWeight: "bolder" }}
          className="text-center m-5"
        >
          Triva Game
        </div>

        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
          <div style={{ fontSize: 30 }} className="pr-5">
            Level:
          </div>
          <div style={{ fontSize: 70 }}>
            {level === 1 ? "🙂" : level === 2 ? "🥴" : "🥵"}
          </div>
          <div style={{ fontSize: 30, color: "orange" }} className="pl-2">
            {" "}
            {level === 1 ? "Easy" : level === 2 ? "Medium" : "Hard"}
          </div>
        </Row>

        <div>
          {" "}
          <Slider
            defaultValue={level}
            min={1}
            max={3}
            onChange={level => {
              this.setState({ level });
            }}
          />
        </div>

        <div
          className="clickable text-center"
          style={{ fontSize: 70, color: "red", fontWeight: "bold" }}
          onClick={() => {
            this.props.history.push({
              pathname: "/dashboard",
              state: {
                difficulty: level,
                activeQuestionIndex: 0,
                score: 0
              }
            });
          }}
        >
          Play
        </div>
      </TrContainer>
    );
  }
}

export default Welcome;
