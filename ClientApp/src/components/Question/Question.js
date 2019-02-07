import React, { Component } from "react";
import { TextArea } from "components/Common";

import "./Question.scss";

class Question extends Component {
  state = {
    text: "",
    completed: false
  };

  renderQuestion = () => (
    <TextArea
      className="question-text-area"
      placeholder="Type your answer here..."
      onBlur={this.checkQuestionAnswered}
      value={this.state.text}
      onChange={e => this.setState({ text: e.target.value })}
    />
  );

  checkQuestionAnswered = e => {
    if (e.target.value !== "") {
      this.setState({ completed: true });
      console.log("completed");
    } else this.setState({ completed: false });
  };

  render() {
    const questionAnswered = this.state.completed
      ? "question-text__number question-text__number--completed"
      : "question-text__number";

    return (
      <div className="question">
        <div className="question-text">
          <p className={questionAnswered}>{this.props.i}</p>
          <p>{this.props.question}</p>
        </div>
        {this.renderQuestion()}
      </div>
    );
  }
}

export default Question;
