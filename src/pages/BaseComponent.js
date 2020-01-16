import React from "react";

class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  $history(pathName, state) {
    return this.props.history.push(pathName, state);
  }
}

export default BaseComponent;
