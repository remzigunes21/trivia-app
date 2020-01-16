import React from "react";
import { Row } from "reactstrap";
import TrContainer from "../../components/TrContainer";
import Slider from "rc-slider";
import BaseComponent from "../BaseComponent";

class Welcome extends BaseComponent {
  constructor(params) {
    super(params);
    this.state = {
      difficulty: 2
    };
  }

  render() {
    const { difficulty } = this.state;
    //difficulty selection
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
            difficulty:
          </div>
          <div style={{ fontSize: 70 }}>
            {difficulty === 1 ? "🙂" : difficulty === 2 ? "🥴" : "🥵"}
          </div>
          <div style={{ fontSize: 30, color: "orange" }} className="pl-2">
            {" "}
            {difficulty === 1 ? "Easy" : difficulty === 2 ? "Medium" : "Hard"}
          </div>
        </Row>

        <div>
          {" "}
          <Slider
            defaultValue={difficulty}
            min={1}
            max={3}
            onChange={difficulty => {
              this.setState({ difficulty });
            }}
          />
        </div>

        <div
          className="clickable text-center"
          style={{ fontSize: 70, color: "red", fontWeight: "bold" }}
          onClick={() => {
            this.$history({
              pathname: "/dashboard",
              state: {
                difficulty,
                activeQuestionIndex: 0,
                score: 0
              }
            });
          }}
        >
          <img
            style={{ margin: 40 }}
            src="/play-now.png"
            height={"120"}
            width={"325"}
          ></img>
        </div>
      </TrContainer>
    );
  }
}

export default Welcome;
