import React from "react";
import { withRouter } from "react-router-dom";
import BaseComponent from "../../pages/BaseComponent";
class Time extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: 15
    };
  }
  getCurrentTime() {
    return this.state.time;
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }
  componentDidMount() {
    this.timer = setInterval(this.startTimer, 1000);
    this.props.onRef(this);
  }

  startTimer = () => {
    const { score } = this.props;
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      clearInterval(this.timer);
      this.$history({
        pathname: "/times-up",
        state: {
          score
        }
      });
    }
  };

  render() {
    return (
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
    );
  }
}

export default withRouter(Time);
