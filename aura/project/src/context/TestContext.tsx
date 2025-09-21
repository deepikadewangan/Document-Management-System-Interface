import React, { createContext, useContext, useState } from 'react';
import { TestResult, TestType } from '../types';
import { getResultInsights, getTestInfo } from '../data/testData';

interface TestContextType {
  results: TestResult[];
  addTestResult: (type: TestType, score: number) => void;
  getTestResults: () => TestResult[];
  clearResults: () => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [results, setResults] = useState<TestResult[]>([]);

  const addTestResult = (type: TestType, score: number) => {
    const testInfo = getTestInfo(type);
    const { level, insight, suggestions } = getResultInsights(type, score);

    const newResult: TestResult = {
      type,
      score,
      maxScore: testInfo.maxScore,
      date: new Date(),
      level,
      insights: insight,
      suggestions
    };

    setResults(prevResults => [newResult, ...prevResults]);
  };

  const getTestResults = () => {
    return [...results];
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <TestContext.Provider value={{ 
      results, 
      addTestResult,
      getTestResults,
      clearResults
    }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};