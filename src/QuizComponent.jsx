import React, { useState, useEffect } from 'react';
import questionsData from './data/questions';
import {
  Container,
  Question,
  Answer,
  Button,
} from './style/QuizComponentStyle';

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
    <Container>
      {currentQuestionIndex === -1 ? (
        <Button onClick={startQuiz}>시작</Button>
      ) : (
        <>
          <Question>
            {shuffledQuestions[currentQuestionIndex].question}
          </Question>
          {showAnswer ? (
            <>
              <Answer>{shuffledQuestions[currentQuestionIndex].answer}</Answer>
              <Button onClick={() => setShowAnswer(false)}>숨기기</Button>
            </>
          ) : (
            <Button onClick={() => setShowAnswer(true)}>답안 보기</Button>
          )}
          {currentQuestionIndex < shuffledQuestions.length - 1 ? (
            <Button onClick={nextQuestion}>다음 질문</Button>
          ) : null}
          <Button onClick={resetQuiz}>홈으로</Button>
        </>
      )}
    </Container>
  );
}

export default QuizComponent;
