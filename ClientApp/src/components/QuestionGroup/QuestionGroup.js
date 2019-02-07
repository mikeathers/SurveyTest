import React from "react";
import Question from "../Question/Question";

import "./QuestionGroup.scss";

const QuestionGroup = props => {
  return (
    <div className="questiongroup">
      <h2>{props.name}</h2>
      {props.questions.map((question, key) => (
        <Question key={key} i={++key} question={question.text} />
      ))}
    </div>
  );
};

export default QuestionGroup;
