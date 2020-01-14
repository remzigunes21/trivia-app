import React, { Component } from "react";
import Questions from "../Questions";
import { Container, Row, Col, Spinner } from "reactstrap";
import StartLottie from "../../assets/game.json";
import TgButton from "../../components/Button";
import Lottie from "react-lottie";

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
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: StartLottie
    };
    return (
      <Container className="container-home" fluid>
        <div
          className="title"
          style={{ backgroundColor: "#00ced1", borderRadius: 5 }}
        >
          <h1 className="game-title">A trivia game</h1>
        </div>
        <Row>
          <Col>
            <Lottie options={defaultOptions} height={200} width={300} />
            <Col className="home">
              <form className="formElements" onSubmit={this.handleSubmit}>
                <div className="radio">
                  <label style={{ margin: 5, padding: 5, fontSize: 18 }}>
                    <input
                      type="radio"
                      value="easy"
                      checked={this.state.difficulty === "easy"}
                      onChange={this.handleChange}
                      style={{ marginRight: 5 }}
                    />
                    easy
                  </label>
                </div>
                <div className="radio">
                  <label style={{ margin: 5, padding: 5, fontSize: 18 }}>
                    <input
                      type="radio"
                      value="medium"
                      checked={this.state.difficulty === "medium"}
                      onChange={this.handleChange}
                      style={{ marginRight: 5 }}
                    />
                    medium
                  </label>
                </div>
                <div className="radio">
                  <label style={{ margin: 5, padding: 5, fontSize: 18 }}>
                    <input
                      type="radio"
                      value="hard"
                      checked={this.state.difficulty === "hard"}
                      onChange={this.handleChange}
                      style={{ marginRight: 5 }}
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
