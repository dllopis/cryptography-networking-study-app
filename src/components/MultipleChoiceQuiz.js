import React, { useState, useEffect } from 'react';

const MultipleChoiceQuiz = ({ data }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [checkAnswerPressed, setCheckAnswerPressed] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const currentQuestion = data[questionIndex];

  const handleCheckAnswer = () => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.term]: { selectedAnswer, isCorrect },
    }));

    if (isCorrect) {
      setScore(score + 1);
    }

    setCheckAnswerPressed(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer(null);
    setCheckAnswerPressed(false);
  };

  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
    setSelectedAnswer(null);
    setCheckAnswerPressed(false);
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  useEffect(() => {
    if (quizSubmitted) {
      // You can perform any actions after the quiz is submitted
      console.log('Quiz Submitted! Your Score:', score);
      console.log('Quiz Answers:', quizAnswers);
    }
  }, [quizSubmitted, score, quizAnswers]);

  return (
    <div>
      <h1>Multiple Choice Quiz</h1>
      {quizSubmitted ? (
        <div>
          <h2>Quiz Submitted! Your Score: {score}</h2>
          {/* You can display additional feedback or actions after the quiz is submitted */}
        </div>
      ) : (
        <div>
          <h2>Question {questionIndex + 1}</h2>
          <p>{currentQuestion.term}</p>
          <form>
            <ul>
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => !checkAnswerPressed && setSelectedAnswer(option)}
                      disabled={checkAnswerPressed}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </form>
          <button onClick={handleCheckAnswer} disabled={!selectedAnswer || checkAnswerPressed}>
            Check Answer
          </button>
          <button onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
            Previous Question
          </button>
          <button onClick={handleNextQuestion} disabled={!selectedAnswer || !checkAnswerPressed}>
            Next Question
          </button>
          {questionIndex === data.length - 1 && (
            <button onClick={handleSubmitQuiz} disabled={!checkAnswerPressed}>
              Submit Quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuiz;
