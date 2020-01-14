import React, { Component } from "react";
import Lottie from "react-lottie";
import TimeLottie from "../../assets/times-up.json";
import { Button } from "reactstrap";

class TimesUp extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: TimeLottie
    };
    return (
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
        <h1>GAME OWER</h1>
        <Button
          className="btn btn-danger"
          onClick={() =>
            this.props.history.push({
              pathname: "/"
            })
          }
        >
          GO TO HOME PAGE
        </Button>
      </div>
    );
  }
}

export default TimesUp;
