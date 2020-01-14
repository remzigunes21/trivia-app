import React, { Component } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const TgButton = ({ text, color, disabled, onClick, clasName, type }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      onClick={onClick}
      clasName={clasName}
      type={type}
    >
      {text}
    </Button>
  );
};

export default TgButton;

Button.propTypes = {
  color: PropTypes.string, // default: 'secondary'
  disabled: PropTypes.bool,
  onClick: PropTypes.func,

  className: PropTypes.string
};
