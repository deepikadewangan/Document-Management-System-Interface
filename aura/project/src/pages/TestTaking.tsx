import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useTest } from '../context/TestContext';
import { getTestQuestions, getTestInfo } from '../data/testData';
import { TestType } from '../types';

const TestTaking = () => {
  const { type } = useParams<{ type: TestType }>();
  const navigate = useNavigate();
  const { addTestResult } = useTest();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!type) {
    navigate('/tests');
    return null;
  }

  const questions = getTestQuestions(type);
  const testInfo = getTestInfo(type);

  if (questions.length === 0) {
    navigate('/tests');
    return null;
  }

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = newAnswers.reduce((sum, value) => sum + value, 0);
      addTestResult(type, score);
      navigate('/tests');
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {testInfo.title}
        </h1>
        <p className="text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <div className="mb-8">
        <ProgressBar
          progress={progress}
          color="primary"
          size="md"
          showLabel
        />
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                fullWidth
                onClick={() => handleAnswer(option.value)}
                className="justify-start h-auto py-4 text-left"
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestTaking;