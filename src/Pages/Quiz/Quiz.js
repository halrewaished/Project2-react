import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestions, setCurrentQuestions] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestions]?.correct_answer,
          ...questions[currentQuestions]?.incorrect_answers,
        ])
    );
  }, [currentQuestions, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle"> Welcome, {name} </span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestions].category}</span>
            <span> Score : {score} </span>
          </div>

          <Question
            currentQuestions={currentQuestions}
            setCurrentQuestions={setCurrentQuestions}
            questions={questions}
            options={options}
            correct={questions[currentQuestions]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 80 }}
          color="inherit"
          size={70}
          thickness={2}
        />
      )}
    </div>
  );
};

export default Quiz;