import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import "./Option.css";

// eslint-disable-next-line react/prop-types
const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, ] = useContext(QuizContext);

  return (
    <div
      onClick={() => selectOption()}
      className={`
      option
        ${quizState.answerSelected && option === answer ? "correct" : ""} ${
        quizState.answerSelected && option !== answer ? "wrong" : ""
      }
        ${hide ? "hide" : ""}
        `}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;