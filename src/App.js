import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Board from "./components/board";
import data from "./data/data.json";

class App extends Component {
  state = {
    topScore: 0,
    data,
    message: "Click an image to begin!"
  };
  render() {
    return (
      <div className="App">
        <Nav
          message={this.state.message}
          currentScore={this.getCurrentScore()}
          topScore={this.state.topScore}
          messageAnimation={this.getMessageAnimation()}
        />
        <div className={this.getBoardAnimation()}>
          <Board array={this.state.data} onClick={this.handleClick} />
        </div>{" "}
        <Footer />
      </div>
    );
  }
  getCurrentScore = () => {
    return this.state.data.filter(element => element.clicked).length;
  };

  handleClick = id => {
    const data = [...this.state.data];
    const selected = data.filter(element => element.id === id)[0];
    let message = "";
    let topScore = this.state.topScore;

    if (selected.clicked) {
      //Game Over
      message = "You guessed incorrectly!";
      data.map(element => (element.clicked = false));
    } else {
      //Continue the game
      selected.clicked = true;
      message = "You guessed correctly!";
      data.filter(element => element.id === id)[0] = { ...selected };

      if (topScore < this.getCurrentScore()) {
        topScore = this.getCurrentScore();
      }
    }

    this.shuffle(data);
    console.log(data);
    this.setState({ data, message, topScore });
  };

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getBoardAnimation = () => {
    if (this.state.message === "You guessed incorrectly!") {
      return "container pt-5 pb-3 animated bounceIn";
    } else {
      return "container pt-5 pb-3";
    }
  };
  getMessageAnimation = () => {
    if (this.state.message === "You guessed incorrectly!") {
      return "text-danger animated flash";
    } else {
      return "";
    }
  };
}

export default App;
