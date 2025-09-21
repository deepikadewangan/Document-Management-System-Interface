export type User = {
  id: string;
  name: string;
  email: string;
};

export type TestType = 
  | 'frustration'
  | 'insomnia'
  | 'schizophrenia'
  | 'depression'
  | 'panic';

export interface TestQuestion {
  id: number;
  question: string;
  options: {
    value: number;
    text: string;
  }[];
}

export interface TestResult {
  type: TestType;
  score: number;
  maxScore: number;
  date: Date;
  level: 'low' | 'moderate' | 'high' | 'severe';
  insights: string;
  suggestions: string[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  source: string;
  date: string;
  url: string;
  isSaved: boolean;
  category: string;
}