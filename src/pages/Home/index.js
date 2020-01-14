import React, { Component } from "react";
import Questions from "../Questions";
import { Container, Row, Col, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import TgButton from "../../components/Button";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { difficulty: "easy" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      difficulty: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`You chose the ${this.state.difficulty} pizza.`);
  }
  render() {
    return (
      <Container fluid>
        {/* <Questions {...this.props} /> */}
        <Row>
          <Col>
            <img
              src="NoFav.svg"
              alt="A Rectangle Image with SVG"
              height="300px"
              width="300px"
            />
            <Col>
              <div className="title">
                <h1>A trivia game</h1>
              </div>
              <div className="md-10">
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value="easy"
                          checked={this.state.difficulty === "easy"}
                          onChange={this.handleChange}
                        />
                        easy
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value="medium"
                          checked={this.state.difficulty === "medium"}
                          onChange={this.handleChange}
                        />
                        medium
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value="hard"
                          checked={this.state.difficulty === "hard"}
                          onChange={this.handleChange}
                        />
                        hard
                      </label>
                    </div>
                    <TgButton
                      type="submit"
                      className="btn  submit-button"
                      onClick={this.onClick}
                      text=" GET STARTED"
                      color="success"
                    />
                  </form>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }

  onClick = event => {
    const { difficulty } = this.state;
    this.props.history.push({
      pathname: "/questions",
      state: {
        difficulty
      }
    });
  };
}

export default Home;
