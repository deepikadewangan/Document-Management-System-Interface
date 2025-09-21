import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Moon, Sun, AlertCircle, Activity } from 'lucide-react';
import Card, { CardContent } from '../components/ui/Card';
import { TestType } from '../types';
import { getTestInfo } from '../data/testData';

const Tests = () => {
  const navigate = useNavigate();

  const tests: { type: TestType; icon: React.ReactNode; color: string }[] = [
    { type: 'frustration', icon: <Brain className="w-8 h-8" />, color: 'text-indigo-600' },
    { type: 'insomnia', icon: <Moon className="w-8 h-8" />, color: 'text-purple-600' },
    { type: 'schizophrenia', icon: <Sun className="w-8 h-8" />, color: 'text-orange-600' },
    { type: 'depression', icon: <AlertCircle className="w-8 h-8" />, color: 'text-blue-600' },
    { type: 'panic', icon: <Activity className="w-8 h-8" />, color: 'text-red-600' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Self-Assessment Tests
        </h1>
        <p className="text-xl text-gray-600">
          Take our scientifically-backed assessments to better understand your mental well-being
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tests.map(({ type, icon, color }) => {
          const testInfo = getTestInfo(type);
          return (
            <Card 
              key={type}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/tests/${type}`)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${color}`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {testInfo.title}
                    </h3>
                    <p className="text-gray-600">
                      {testInfo.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600 text-sm">
          Note: These assessments are for informational purposes only and should not be considered as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
};

export default Tests;