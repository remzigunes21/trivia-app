import React, { Component } from "react";

import Stepper from "react-stepper-horizontal";

class TrStepper extends Component {
  render() {
    return (
      <div>
        <Stepper
          defaultColor={"#d1c800"}
          defaultTitleColor={"black"}
          activeTitleColor={"red"}
          activeColor={"orange"}
          // defaultBarColor={"red"}
          circleFontSize={15}
          steps={[
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" },
            { title: "" }
          ]}
          activeStep={this.props.activeStep}
        />
      </div>
    );
  }
}

export default TrStepper;
