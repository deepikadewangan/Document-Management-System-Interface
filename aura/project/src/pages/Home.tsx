import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Heart, Brain, BookOpen } from 'lucide-react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      title: "Mental Health Assessments",
      description: "Take scientifically-backed tests to understand your mental well-being better.",
      action: () => navigate('/tests')
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Expert Articles",
      description: "Read the latest research and insights from mental health professionals.",
      action: () => navigate('/articles')
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Save & Track",
      description: "Bookmark articles and track your progress over time.",
      action: () => isAuthenticated ? navigate('/saved') : navigate('/login')
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Moon className="h-12 w-12 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Aura
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your companion for mental wellness and self-discovery
        </p>
        {!isAuthenticated && (
          <div className="flex justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/register')}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="text-center p-6">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <Button
                variant="text"
                onClick={feature.action}
                className="mt-2"
              >
                Learn More →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Start Your Wellness Journey Today
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of others who have taken the first step towards better mental health. Our assessments and resources are designed to support your personal growth and well-being.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/tests')}
        >
          Take Your First Assessment
        </Button>
      </div>
    </div>
  );
};

export default Home;