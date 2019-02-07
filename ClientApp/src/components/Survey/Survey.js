import React, { Component } from "react";
import QuestionGroup from "../QuestionGroup/QuestionGroup";

import questions from "questions";
import "./Survey.scss";

export default class Survey extends Component {
  render() {
    return (
      <div className="survey">
        <QuestionGroup name="Physical Questions" questions={questions} />
      </div>
    );
  }
}
