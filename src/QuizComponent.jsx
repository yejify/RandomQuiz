import React, { useState, useEffect } from 'react';
import questionsData from './data/questions';

function QuizComponent() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [showAnswer, setShowAnswer] = useState(false);

  // 질문을 무작위로 섞는 함수
  function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  useEffect(() => {
    setShuffledQuestions(shuffleArray(questionsData));
  }, []);

  function nextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setShowAnswer(false);
  }

  function startQuiz() {
    setCurrentQuestionIndex(0);
  }

  function resetQuiz() {
    setCurrentQuestionIndex(-1);
    setShowAnswer(false);
  }

  return (
    <div>
      {currentQuestionIndex === -1 ? (
        <button onClick={startQuiz}>시작</button>
      ) : (
        <>
          <h1>{shuffledQuestions[currentQuestionIndex].question}</h1>
          {showAnswer ? (
            <>
              <p>{shuffledQuestions[currentQuestionIndex].answer}</p>
              <button onClick={() => setShowAnswer(false)}>숨기기</button>
            </>
          ) : (
            <button onClick={() => setShowAnswer(true)}>답안 보기</button>
          )}
          {currentQuestionIndex < shuffledQuestions.length - 1 ? (
            <button onClick={nextQuestion}>다음 질문</button>
          ) : null}
          <button onClick={resetQuiz}>홈으로</button>
        </>
      )}
    </div>
  );
}

export default QuizComponent;
